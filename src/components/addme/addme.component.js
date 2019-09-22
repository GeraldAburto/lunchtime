import React from 'react';
import M from 'materialize-css/dist/js/materialize';

class AddMe extends React.Component {

    constructor(props) {
        super(props);

        let { menu, onAddMe } = this.props;

        this.state = {
            menu,
            onAddMe,
            food: 'Menu was not available'
        };
    }

    componentDidMount() {
        let select = document.getElementById('menu');
        M.FormSelect.init(select);
    }

    handleOnChange = (event) => {
        this.setState({ food: event.target.value });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.state.onAddMe(this.state.food);
    }

    render() {
        let { menu, food } = this.state;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <select name="menu" id="menu" value={food} onChange={this.handleOnChange}>
                                <option value='Menu was not available' disabled defaultValue>Choose your food</option>
                                {
                                    menu && menu.length > 0 ?
                                        menu.map((item, i) => (<option key={i} value={item}> {item}</option>)) :
                                        null
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Add me
                                <i className="material-icons right">add</i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    };
}

export default AddMe;