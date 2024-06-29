import React, { useState } from "react";
import Header from "../Header/Header";
import "../../scss/NewsFullPage.scss";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Modal from "../review/Modal";
import newsImg from '../../assets/cancer.jpeg'
interface NewsFullPageProps {
  timer: string;
}

const NewsFullPage: React.FC<NewsFullPageProps> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="newsFullPage">
      <Header />
      <div className="newspage">
        <div className="left">
          <div className="heading">Breakthrough in Cancer Research</div>
          <div className="subheading">
            New treatment shows 90% effectiveness in early trials.
          </div>
          <div className="description">
            In a significant advancement in the fight against cancer,
            researchers have developed a new treatment that has demonstrated a
            90% effectiveness rate in early clinical trials. This innovative
            therapy, which combines targeted drug delivery with advanced
            immunotherapy techniques, has shown remarkable success in shrinking
            tumors and extending patient survival rates. The study, conducted by
            a team of scientists at a leading medical research institute,
            involved over 200 patients diagnosed with various types of cancer.
            Patients receiving the new treatment experienced significantly
            better outcomes compared to those undergoing standard therapies. The
            trial's success marks a potential turning point in cancer treatment,
            offering hope to millions of patients worldwide. Experts are
            optimistic about the future applications of this therapy, noting
            that it could revolutionize how cancer is treated. The researchers
            are now planning larger-scale trials to confirm these findings and
            explore the treatment's efficacy across different cancer types. If
            subsequent trials are successful, this new approach could become a
            standard part of cancer care, dramatically improving patient
            prognosis and quality of life.
          </div>
        </div>
        <div className="right">
          <div className="actionNewsFullPage">
            <div className="votesNewsFullPage">
              <FaRegThumbsUp />
              <FaRegThumbsDown />
            </div>
            <div className="reviewNewsFullPage">
              <div className="timer">00:03:21</div>
              <button className="reviewButtonNewsFullPage" onClick={openModal}>
                Review
              </button>
            </div>
            {showModal && (
              <Modal showModal={showModal} closeModal={closeModal} />
            )}
          </div>
          <img src={newsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsFullPage;
