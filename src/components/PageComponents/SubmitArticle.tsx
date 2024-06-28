import React from 'react';
import SubmissionForm from '../SubmissionNewsComponent/SubmissionForm';
import '../../scss/SubmitArticle.scss';
import BigContainer from '../DashboardComponents/BigContainer';
import Header from '../Header/Header';

const SubmitArticle: React.FC = () => {
  return (
    <div className='submitArticleFullpage'>
      <Header/>
      <div className="submitArticle">
        <div className="left">
          <div className="title">SUBMIT <br />ARTICLE</div>
          {/* <BigContainer name="Live Preview" quickFarm={false} /> */}
        </div>
        <div className="right">
          <SubmissionForm />
        </div>
      </div>
    </div>
  );
}

export default SubmitArticle;
