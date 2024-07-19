import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function() {
    render(<Card 
        caption='test caption'
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={3}
    />)
});

it("matches snapshot", function() {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });

// it("works when you click on the right arrow", function() {
//   const { container } = render(
//     <Card
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );
//   // expect the first image to show, but not the second
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).not.toBeInTheDocument();

//   // move forward in the carousel
//   const rightArrow = container.querySelector(".bi-arrow-right-circle");
//   fireEvent.click(rightArrow);

//   // expect the second image to show, but not the first
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).not.toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).toBeInTheDocument();
// });