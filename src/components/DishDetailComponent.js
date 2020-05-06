import React, { Component } from 'react';
import { Card, CardImg,CardText,CardBody,CardTitle}from'reactstrap';

class DishDetail extends Component{
    converDatetoCommentDateFormat(timestamp){
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US',{year: 'numeric', month: 'short',day: 'numeric'});
    }

    renderDish(dish){
        if (dish !=null){
            return(
                <Card>
                     <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                     <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                     </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComment(comments){
        if(comments == null || comments.length==0){
            return(
                <div></div>
            );
        }

        const renderedComments = comments.map((comments)=>{
            return(
                <li>
                    <p>{comments.comment}</p>
                    <p>-- {comments.author},{this.converDatetoCommentDateFormat(comments.date)}</p>
                </li>
            )
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    { renderedComments }
                </ul>
            </div>
        )
    }
    
    render(){
        if(this.props.dish !=null){
            return (
                <div className="row">
                    <div className ="col-12 col-md-5 md-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className ="col-12 col-md-5 md-1">
                        {this.renderComment(this.props.dish.comments)}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

}
export default DishDetail;