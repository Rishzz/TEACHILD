
import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <a href="https://youtube.com/playlist?list=PLy--oUd7vkNtOOcv8NMHKgncONUNCU51B" target="_blank" rel="noreferrer">
        <button className="btn free__btn">Access Now</button> </a>
        
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span>
          <span className=" d-flex align-items-center gap-2">

          <a href="https://drive.google.com/drive/folders/1-HTYN-IG41PPADjG5KYv0tjWloWz9XEt" target="_blank" rel="noreferrer">
            <button  id="Notes_btn">Notes</button> </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;