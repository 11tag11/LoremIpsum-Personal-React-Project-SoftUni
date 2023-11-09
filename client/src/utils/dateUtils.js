// Here format date from isoDate, which si how server is keeping the date

export const formatDate = (isoDate) => {
    const options = { year:'numeric', month:'long', day:'numeric'};

    return new Date(isoDate).toLocaleDateString('en-US', options);
};