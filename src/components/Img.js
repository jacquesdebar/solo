import React from "react";

const url = "https://raw.githubusercontent.com/jacquesdebar/solo-imgs/master";

export default ({ src, style, alt, ...props }) => (
    <img style={{ maxWidth: "100%", ...style }} alt={`${alt}`} src={`${url}${src}`} {...props} />
);
