import React from 'react';
import DashboardView from './dashboard';
import SeatAllocationUserInfo from './seatAlocation/seatAlocationUserInfo';
import SeatAllocation from './seatAlocation/seatAlocation';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSeatAllocationUserInfo: true,
        }
    }

    onSeatAllocation = () =>{
        this.setState({
            isSeatAllocationUserInfo: false,
        });
    }

    render(){
        const { isSeatAllocationUserInfo } = this.state;
        return (
            <div style={{overflowX: 'hidden'}}>
                <DashboardView />
                {(isSeatAllocationUserInfo) ? <SeatAllocationUserInfo
                    isSeatAllocationUserInfo={isSeatAllocationUserInfo}
                    onSeatAllocation={this.onSeatAllocation}
                /> : <SeatAllocation />} 
            </div>
        )
    }
}

export default Dashboard;