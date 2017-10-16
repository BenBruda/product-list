// @flow
import * as React from 'react';

type Props = {
  products: Array<{ id: number, name: string, description: string }>
};

class App extends React.Component<Props> {
  render() {
    return (
      <div className="card-list">
        {this.props.products.map(product => {
          return (
            <div className="cardWraper">
              <div className="card" key={product.id}>
                <div className="img-wrap">
                  <div className="img-inner">
                    <img
                      src="https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <h3>{product.name} </h3>
                <span>{product.description} </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
