import React, { Component } from 'react';
import './HomePage.css';
import loading from '../../assests/loading.png';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: 10,
            loadingUserList: false,
            photoList:[],
        };
    }

    componentDidMount() {
        this.refs.user_scroll.addEventListener("scroll", () => {
            if (this.refs.user_scroll.scrollTop + this.refs.user_scroll.clientHeight >= this.refs.user_scroll.scrollHeight - 20) {
                this.loadMoreData();
            }
        });

    }

    displayUsers() {
        let userList = [];
        for (let i = 0; i < this.state.users; i++) {
            userList.push(
                <li key={i}>
                    <p><b>Name:</b>  Bobby{i}</p>
                    <p><b>Address:</b>  {i} Church Road TRURO TR98 {i}BL</p>
                    <div><img src="https://picsum.photos/200/200?random=1"  alt="randomPic"/></div>
                </li>
            );
        }
        return userList;
    }
    loadMoreData() {
        if (this.state.loadingUserList) {
            return;
        }
        this.setState({ loadingUserList: true });
        setTimeout(() => {
            this.setState({ users: this.state.users + 10, loadingUserList: false });
        }, 1000);
    }
    Logout = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="infinite_scroll_div">
                <div className="Logout" onClick={this.Logout}>Logout</div>
                <h3 className="heading">Infinite Scrolling list</h3>
                <div ref="user_scroll" className="userList">
                    <ul>
                        {this.displayUsers()}
                    </ul>
                    {this.state.loadingUserList ?
                        <span className="loading">
                            <img src={loading} className="loader" /><b>loading More Users..</b>
                        </span> : ""}
                </div>
            </div>
        );
    }
}

export default Home;