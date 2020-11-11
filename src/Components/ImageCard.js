import React from "react";
import { Grid } from "semantic-ui-react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpan);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };
  render() {
    const imgNode = this.imgRef;

    // console.log(this.props);
    const { alt, src } = this.props;
    //src has different image sizes, in case for future  use

    return (
      <Grid style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={imgNode} alt={alt} src={src} />
      </Grid>
    );
  }
}

export default ImageCard;
