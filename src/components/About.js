// About component
function About(props) {
    // Use the placeholder image URL if no prop is passed for blogImage
    const imageUrl =
      props.blogImage || "https://via.placeholder.com/215"; // Update the default image URL
  
    return (
      <aside>
        <img src={imageUrl} alt="blog logo" />
        <p>{props.about}</p> {/* Update prop name from "about" to "aboutText" */}
        {/* Additional elements can be added here if needed */}
      </aside>
    );
  }
  
  export default About;
  