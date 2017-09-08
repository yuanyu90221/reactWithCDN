
class Timer extends React.Component {
    
    constructor(){
        super();
        // let workingTime = this.props.workingTime;
        // console.log(this.props);
        this.state = {
            timeElapsed: 0,
            status:'pause',
            workingTime: 0,
            stateColor:'run-color'
        };
    }

    totalTime(timeOne, timeTwo){
        return timeOne + timeTwo;
    }
    componentDidMount() {
        console.log(this.props.workingTime);
        this.setState({workingTime:this.props.workingTime});
        this.interval = setInterval(this.elapseTime.bind(this),1000);
        this.setState({start: new Date()});
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    elapseTime() {
        // var timeElapsed = CURRENT TIME - START TIME
        var timeElapsed = Math.floor((new Date() - this.state.start)/1000);
        console.log('timeElapsed: ', timeElapsed);
        this.setState({timeElapsed: timeElapsed});
        // if timeElapsed = 25 minutes -> alert
        if( this.state.timeElapsed >= this.state.workingTime * 60){
            clearInterval(this.interval);
            alert("Time for break");            
        }
    }
    formatTime(time){
        let seconds_part = time % 60 >= 10 ? (time % 60): '0'+(time % 60);
        let minute_part = Math.floor(time/60) >= 10 ? Math.floor(time/60): '0'+Math.floor(time/60);
        return minute_part+':'+seconds_part;
    }
    changeStatus(){
        let {status} = this.state;
        if(status=='pause'){
            clearInterval(this.interval);
            this.setState({stateColor:'stop-color'});
            this.setState({workingTime:this.state.workingTime - Math.floor(this.state.timeElapsed/60)});
            console.log('workingTime',this.state.workingTime - Math.floor(this.state.timeElapsed/60));
            this.setState({status:'continue'});
        }
        else if(status=='continue'){
            var current = new Date();
            this.setState({stateColor:'run-color'});
            this.setState({start: current - this.state.timeElapsed*1000 });
            this.interval = setInterval(this.elapseTime.bind(this),1000);
            this.setState({status:'pause'});
        }
    }
    render(){
        return (
            <div onClick={this.changeStatus.bind(this)} className={this.state.stateColor}>
                <h1>{this.formatTime(this.state.timeElapsed)}</h1>
                {/*<button onClick={this.changeStatus.bind(this)}>{this.state.status}</button>*/}
            </div>
        )
    }
}

ReactDOM.render(
    <Timer workingTime={25} restingTime={5}/>,
    document.getElementById('root')
);