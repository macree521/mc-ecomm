import React, { Component } from 'react';

class PurchaseDetail extends Component {
  render() {
      const { className } = this.props;
    
      return (
        <div className={`${className} purchase-detail`}>
          purchase details go here
        </div>
      )
    }
}

export default PurchaseDetail;