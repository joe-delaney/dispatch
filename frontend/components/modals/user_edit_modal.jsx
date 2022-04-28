import React from "react";

export default class UserEditModal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.saveUserChanges = this.saveUserChanges.bind(this);

        const title = this.props.currentUser.title ? this.props.currentUser.title : "";
        const status = this.props.currentUser.status ? this.props.currentUser.status : "";

        this.state = {
            id: this.props.currentUser.id,
            display_name: this.props.currentUser.displayName,
            title: title,
            status: status,
            displayNameError: false
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
        const title = this.props.currentUser.title ? this.props.currentUser.title : "";
        const status = this.props.currentUser.status ? this.props.currentUser.status : "";
        this.setState({
            id: this.props.currentUser.id,
            display_name: this.props.currentUser.displayName,
            title: title,
            status: status,
            displayNameError: false
        })
        this.props.toggleEditModal();
    }

    saveUserChanges(e) {
        e.preventDefault();
        this.props.updateUser(this.state)
            .then(() => {
                this.props.toggleEditModal();
            },
            (errors) => {

            });
    }

    render() {
        const editModalClass = this.props.editModalDisplayed ? "modal" : "modal hidden"
        const errorMessage = !this.state.display_name.length ? (
            <div className="edit-error">
                 <p className="edit-error-icon">⚠</p>
                 <label for="displayNameInput" className="edit-error-message">Unfortunately, you can’t leave this blank.</label>
            </div>) : "";
        const inputErrorActive = !this.state.display_name.length ? "edit-error-active" : "";
        const descriptionErrorActive = !this.state.display_name.length ? "description-error-active" : "";
        const containerErrorActive = !this.state.display_name.length ? "user-edit-container-error-active" : "";

        return (
            <section className={editModalClass} >
                <div className={`modal-container user-edit-modal-content-container ${containerErrorActive}`}>
                    <div className="modal-header">
                        <div className="modal-title">Edit your profile</div>
                        <button onClick={this.closeModal} className="close-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="user-edit-modal-content">
                        <div className="user-edit-modal-inputs">
                            <div className="user-edit-modal-input-container">
                                <label for="displayNameInput" className="user-edit-modal-input-label">Display Name</label>
                                <input autocomplete="off" id="displayNameInput" className= {`user-edit-modal-input ${inputErrorActive}`} type="text" value={this.state.display_name} onChange={this.handleInput("display_name")} />
                                <span className={`user-edit-modal-input-description ${descriptionErrorActive}`}>This could be your first name, or a nickname — however you’d like people to refer to you in Slack.</span>
                                {errorMessage}
                            </div>
                            <div className="user-edit-modal-input-container">
                                <label for="titleInput" className="user-edit-modal-input-label">What I do</label>
                                <input autocomplete="off" id="titleInput" className="user-edit-modal-input" type="text" value={this.state.title} onChange={this.handleInput("title")} placeholder="title (optional)" />
                                <span className="user-edit-modal-input-description">Let people know what you do.</span>
                            </div>
                            <div className="user-edit-modal-input-container">
                                <label for="statusInput" className="user-edit-modal-input-label">Status</label>
                                <input autocomplete="off" id="statusInput" className="user-edit-modal-input" type="text" value={this.state.status} onChange={this.handleInput("status")} placeholder="status (optional)" />
                                <span className="user-edit-modal-input-description">Let people know what you are currently up to.</span>
                            </div>
                        </div>
                        <div className="user-edit-modal-image-container">
                            <strong className="user-edit-modal-input-label">Profile Photo</strong>
                            <div className="user-edit-image">
                                <strong className="user-edit-initial">{this.state.display_name[0]}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="user-edit-modal-footer">
                        <button onClick={this.closeModal} className="user-edit-button user-cancel-edit">Cancel</button>
                        <button onClick={this.saveUserChanges} className="user-edit-button user-save-changes">Save Changes</button>
                    </div>
                </div>
            </section>
        )
    }
}