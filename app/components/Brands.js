var React = require('react');
var ReactDOM = require('react-dom');


class Brands extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedBrand:'All'
        };
        this.updateBrand = this.updateBrand.bind(this);
    }
    updateBrand(brand){
        this.setState(function(){
            return {selectedBrand: brand}
        });
    }
    render() {
        var brands = ['ALL', 'Sony', 'Apple', 'Samsung', 'Huawei', 'Google', 'LG', 'OnePLus', 'Razer', 'OPPO'];
        return (
            <ul className='brands'>
                {brands.map(function(brand){return(<li style={brand === this.state.selectedBrand ? {color:'red' }: null } onClick={this.updateBrand.bind(null, brand)} key={brand}>{brand}</li>)}, this)}
            </ul>
      )
    }
};


module.exports = Brands;