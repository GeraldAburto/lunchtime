import React from 'react';
import M from 'materialize-css';

import Menu from '../../components/menu/menu.component';
import Commensals from '../../components/commensals/commensals.component';
import AddMe from '../../components/addme/addme.component';

class TodayPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            commensals: []
        };
    }

    handleOnAddMe = (food) => {

        if (!this.props.currentUser)
            return M.toast({ html: '<span>Please <a href="#/login" className="btn-flat toast-action">Sign in</a> to select your food</span>' });

        let { commensals } = this.state,
            { displayName, avatar } = this.props.currentUser;

        commensals.push({
            name: displayName,
            avatar,
            food
        });

        this.setState({
            commensals: commensals
        });
    }

    handleOnRemove = (id) => {
        let { commensals } = this.state;
        commensals.splice(id, 1);
        this.setState({ commensals: commensals });
    }

    render() {
        let { menu, commensals } = this.state;
        let { currentUser } = this.props;
        return (
            <div className='row'>
                <div className="col s4">
                    <Menu menu={menu} />
                </div>
                <div className="col s8">
                    <div className="row">
                        <div className="col s12">
                            <Commensals commensals={commensals} handleOnRemove={this.handleOnRemove} />
                        </div>
                        <div className="col s12">
                            {
                                commensals.find(commensal => commensal.name === currentUser.displayName) ?
                                    null :
                                    <AddMe menu={menu} onAddMe={this.handleOnAddMe} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default TodayPage;