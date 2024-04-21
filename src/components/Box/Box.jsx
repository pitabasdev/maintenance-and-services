import React from "react";
import "./BoxContainer.css"; // Import CSS file for styling

function Box() {
  return (
    <div>
      <h1 className="title">Our Services</h1>
      <div className="box-container">
        <div className="box">
          <h2>Box 1</h2>
          <p>
            This is box 1 content. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Odit velit quas omnis. Eos eligendi, harum
            molestias non suscipit reiciendis fugit nulla illo beatae nostrum
            magnam impedit veritatis nihil mollitia culpa?
          </p>
        </div>
        <div className="box">
          <h2>Box 2</h2>
          <p>
            This is box 2 content. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptates voluptatum veritatis nihil numquam,
            itaque magni ratione fuga perspiciatis a deleniti incidunt ex?
            Repellat sint iste dicta perspiciatis possimus voluptates
            repudiandae.
          </p>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <p>
            This is box 3 content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis in quisquam, tenetur sit asperiores porro
            tempore rem enim beatae? Temporibus vel dicta ullam possimus aperiam
            eum rerum. Ea, reprehenderit consequatur.
          </p>
        </div>
        <div className="box">
          <h2>Box 4</h2>
          <p>
            This is box 4 content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores in ducimus nisi molestiae nulla
            suscipit! Magnam voluptatem itaque ipsam voluptates cumque quos
            incidunt, beatae, nulla dignissimos quisquam, laboriosam quasi
            dolore?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
