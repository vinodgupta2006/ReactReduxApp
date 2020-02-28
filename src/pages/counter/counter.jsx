import React, { Component } from 'react';
import Button from '../../components/button/button';
import { connect } from 'react-redux';
import { increment, decrement, add, subtract, addResult } from '../../redux/action/action';

class Counter extends Component{

    render(){
        const { cntrl, result, onSubtract, onAdd, onDecrement, onIncrement, onResult } = this.props;
        console.log('COUNTERRRRRRRRRRRRRRRR')
        console.log(this.props.result)

        return (
            <div className="counter">
                <div className="counter__increment">
                    <div className="counter__value">{cntrl}</div>
                    <Button name="Increment" onClick={onIncrement} />
                    <Button name="Decrement" onClick={onDecrement} />
                    <Button name="Add" onClick={onAdd} />
                    <Button name="Subtracter" onClick={onSubtract} />
                    <Button name="Result" onClick={()=> onResult(cntrl)} />
                    <ul>
                        {result.map(data =>(
                            <li key={data}>{data}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        cntrl: state.cntrl.counter,
        result: state.reslt.result,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrement: () => dispatch( increment() ),
        onDecrement: () => dispatch( decrement() ),
        onAdd: () => dispatch( add(10) ),
        onSubtract: () => dispatch( subtract(10) ),
        onResult: (result) => dispatch( addResult(result) )
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)