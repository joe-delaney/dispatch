import React from "react";

export default class UserEditModal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.currentUser = this.props.currentUser;
        this.title = this.currentUser.title ? this.currentUser.title : "";
        this.status = this.currentUser.status ? this.currentUser.status : "";

        this.state = {
            id: this.currentUser.id,
            displayName: this.currentUser.displayName,
            title: this.title,
            status: this.status
        }
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    closeModal(e) {
        this.setState({
            id: this.currentUser.id,
            displayName: this.currentUser.displayName,
            title: this.title,
            status: this.status
        })
        this.props.toggleEditModal();
    }

    render() {
        const editModalClass = this.props.editModalDisplayed ? "user-edit-modal" : "user-edit-modal hidden"

        return (
            <section className={editModalClass} >
                <div className="user-edit-modal-content-container">
                    <div className="user-edit-modal-header">
                        <div className="user-edit-modal-title">Edit your profile</div>
                        <button onClick={this.closeModal} className="close-edit-user-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="user-edit-modal-content">
                        <div className="user-edit-modal-inputs">
                            <div className="user-edit-modal-input-container">
                                <label for="displayNameInput" className="user-edit-modal-input-label">Display Name</label>
                                <input id="displayNameInput" className= "user-edit-modal-input" type="text" value={this.state.displayName} onChange={this.handleInput("displayName")} />
                                <span className="user-edit-modal-input-description">This could be your first name, or a nickname — however you’d like people to refer to you in Slack.</span>
                            </div>
                            <div className="user-edit-modal-input-container">
                                <label for="titleInput" className="user-edit-modal-input-label">What I do</label>
                                <input id="titleInput" className="user-edit-modal-input" type="text" value={this.state.title} onChange={this.handleInput("title")} placeholder="title (optional)" />
                                <span className="user-edit-modal-input-description">Let people know what you do.</span>
                            </div>
                            <div className="user-edit-modal-input-container">
                                <label for="statusInput" className="user-edit-modal-input-label">Status</label>
                                <input id="statusInput" className="user-edit-modal-input" type="text" value={this.state.status} onChange={this.handleInput("status")} placeholder="status (optional)" />
                                <span className="user-edit-modal-input-description">Let people know what you are currently up to.</span>
                            </div>
                        </div>
                        <div className="user-edit-modal-image-container">
                            <strong className="user-edit-modal-input-label">Profile Photo</strong>
                            <div className="user-edit-image">
                                <strong className="user-edit-initial">{this.state.displayName[0]}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="user-edit-modal-footer">
                        
                    </div>
                </div>
            </section>
        )
    }
}