// import SubmissionForm from '../SubmissionNewsComponent/SubmissionForm';
// import '../../scss/SubmitArticle.scss';
// import Header from '../Header/Header';
// import { ChangeEvent, useState } from 'react';




//   const [file, setFile] = useState<string | undefined>(undefined);

//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     if (e.target.files && e.target.files.length > 0) {
//       console.log(e.target.files);
//       setFile(URL.createObjectURL(e.target.files[0]));
//     }
//   }
  
//   return (
//     <div className='submitArticleFullpage'>
//       <Header/>
//       <div className="submitArticle">
//         <div className="left">
//           <div className="title">SUBMIT <br />ARTICLE</div>
//           <div className='uploadImg'>
//             <input className='input' type="file" onChange={handleChange} />
//               <img className='img' src={file} />
//           </div>
//         </div>
//         <div className="right">
//           <SubmissionForm />
//         </div>
//       </div>
//     </div>
//   );


// export default SubmitArticle;


import React, { ChangeEvent, useState } from 'react';
import SubmissionForm from '../SubmissionNewsComponent/SubmissionForm';
import '../../scss/SubmitArticle.scss';
import Header from '../Header/Header';

const SubmitArticle = () => {
  const [file, setFile] = useState<string | undefined>(undefined);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className='submitArticleFullpage'>
      <Header />
      <div className="submitArticle">
        <div className="left">
          <div className="title">SUBMIT <br />ARTICLE</div>
          <div className='uploadImg'>
            <input className='input' type="file" onChange={handleChange} />
            {file && <img className='img' src={file} alt="Uploaded file preview" />}
          </div>
        </div>
        <div className="right">
          <SubmissionForm />
        </div>
      </div>
    </div>
  );
};

export default SubmitArticle;
