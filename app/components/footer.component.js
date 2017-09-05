import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="footer">
        <p>An App brought to you by Declan <img src="public/img/logo.png" className="logo"/>
            </p>
      </div>
    )
  }

}

export default Footer