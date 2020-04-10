class Interviw extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    componentDidMount() {
        this.setState({ count: this.state.count + 1 })
        console.log('1',this.state.count)
        this.setState({ count: this.state.count + 1 })
        console.log('2',this.state.count)
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 })
            console.log('3',this.state.count)
        },0)
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 })
            console.log('4',this.state.count)
        },0)
    }
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
            </div>
        )
    }
}