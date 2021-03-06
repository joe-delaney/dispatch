export const TOGGLE_EDIT_MODAL = "TOGGLE_EDIT_MODAL";
export const TOGGLE_CHANNEL_DETAILS_MODAL = "TOGGLE_CHANNEL_DETAILS_MODAL";
export const TOGGLE_GROUP_DETAILS_MODAL = "TOGGLE_GROUP_DETAILS_MODAL";
export const TOGGLE_CREATE_CHANNEL_MODAL = "TOGGLE_CREATE_CHANNEL_MODAL";
export const TOGGLE_EDIT_CHANNEL_MODAL = "TOGGLE_EDIT_CHANNEL_MODAL";

export const toggleEditModal = () => ({
    type: TOGGLE_EDIT_MODAL
});

export const toggleChannelDetailsModal = () => ({
    type: TOGGLE_CHANNEL_DETAILS_MODAL
});

export const toggleCreateChannelModal = () => ({
    type: TOGGLE_CREATE_CHANNEL_MODAL
});

export const toggleGroupDetailsModal = () => ({
    type: TOGGLE_GROUP_DETAILS_MODAL
});

export const toggleEditChannelModal = (attribute) => ({
    type: TOGGLE_EDIT_CHANNEL_MODAL,
    attribute
})