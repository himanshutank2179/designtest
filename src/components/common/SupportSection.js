import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ArticleTitle from "./ArticleTitle";

class SupportSection extends Component {
    constructor() {
        super();
    }

    render() {
        const {title, articles} = this.props;


        let aTitles = articles.map((article, index) => <ArticleTitle key={index} articleId={article.tbl_support_article_id} title={article.title}/>);

        return (
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="main_title_3">
                        <span><em/></span>
                        <h2>{title}</h2>
                    </div>
                    <div className="list_articles add_bottom_30 clearfix">
                        <ul>
                            {aTitles}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SupportSection;