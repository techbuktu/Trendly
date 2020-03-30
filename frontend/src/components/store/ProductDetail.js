import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductApi from '../../api/store/ProductApi'

class ProductDetail extends Component {
    static propTypes = {

    }
    
    constructor(props){
        super(props)

        this.state = {
            productLink: this.props.match.params.productLink,
            product: {}
        }
    }

    componentDidMount(){
        let productLink = this.props.match.params.productLink
        //this.setState({ productLink }, this.getProductDetails())
        console.log(`this.state.productLink: ${this.state.productLink}`)
        this.getProductDetails()
    }

    getProductDetails(){
        ProductApi.getProduct(this.state.productLink)
            .then(res => {
                this.setState({
                    product: res.data.product
                }, () => console.log(`this.state.product: ${this.state.product}`))
            })
            .catch(err => console.group(`API error: ${err}`))
    }

    render() {
        if(this.state.product.name){
            const { product } = this.state
            return (
                <div>
                    <h3>
                        { product.name} : ${product.price}
                    </h3>
                    <p>
                        <img src={product.imageUrl} />
                    </p>
                </div>
            )
        } else {
            return (<> Sorry, no Product detail data available .. yet . </>)
        }
    }
}

export default ProductDetail