import React from 'react';
import Flash from '../../services/Flash';
import Request from '../../services/Request';

function ExamTableRow(props) {

  const updateStatus = () => {
    let url = "http://localhost:8080/QuizWit/UpdateExamStatus";
    let status = props.status == 1 ? 0 : 1;
    let data = {
        examId: props.examId,
        status
    }
    console.log(data);
    Request.post(url, data)
    .then((res) => {
        if(res.success)
            Flash.message(res.success, 'bg-success');
        else Flash.message(res.error, 'bg-danger');
        props.fetchDetails();
    })
  }
  return (
      <tr key={props.examId} id={'EXAM_ID' + props.examId}>
          <td>{props.serialNo}</td>
          <td className='exam-title-value'>{props.title}</td>
          <td>{props.visibility == 1 ? 'Private' : 'Public'}</td>
          <td>{props.startTime}</td>
          <td> 
            <div className='flex-row ai-c'>
              <label className="custom-toggle-btn mr-5">
                  <input type="checkbox" defaultChecked={props.status == 1 ? true : false} value={props.examId} onClick={updateStatus}/>
                  <span>
                      <i className="fas fa-check"></i>
                  </span>
              </label>
              <div className='mr-10'>
                {props.status == 1 ? <span className='success'><i className='fa fa-dot-circle-o mr-5'></i>Active</span> : <span className='danger'><i className='fa fa-dot-circle-o mr-5'></i>Inactive</span>}
              </div>
          
            </div>
          </td>
          <td className='select-exam-radio-container'>
            <div className='flex-row jc-c'>
              <label className='select-exam-radio'>
                <input type="radio" name="examId" value={props.examId}/>
                <span>
                  <i className='fas fa-check'></i>
                </span>
              </label>
            </div>
          </td>
      </tr>
  )
}

export default ExamTableRow