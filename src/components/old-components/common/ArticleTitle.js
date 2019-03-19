import React from 'react';
import {Link, NavLink} from "react-router-dom";

const ArticleTitle = ({title, articleId}) => {
    let urlTitle = title.replace(/\s+/g, '-').toLowerCase();
    return (
        <div>
            <li><NavLink activeClassName="active" to={/article-details/ + articleId + '/' + urlTitle}><i
                className="icon_documents_alt"/>{title}</NavLink></li>
        </div>
    );
};

export default ArticleTitle;