/* eslint-disable */
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Row, Col, Clearfix, Collapse, Button, Table } from 'react-bootstrap';
import { Accordion, AccordionItem } from 'react-light-accordion';
import { Grid } from '@material-ui/core';
import theme from "../../theme";
import * as Actions from '../../actions/twitterAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faSpinner, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPlus, faMinus, faSpinner, faCaretRight, faCaretDown);

const useStyles = makeStyles(theme => ({
    section: {
        border: '1px solid white',
    },
    sectionHeader: {
        fontSize: 16,
        backgroundColor: '#1bcaa6',
        padding: '16px',
        color: 'white',
        border: '1px solod white'
    },
    imageStyle: {
        float: 'right',
    },
    quoteStyle: {
        padding: '10px 16px',
    }
}));

export const TwitterDashboard = (props) => {
    const [ShowQuote, setShowQuote] = useState(false);
    const [twitterList, setTwitterList] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        fetchTweetsList();
    }, []);

    const fetchTweetsList = () => {
        props.actions.fetchTweetsList((response, isSuccess) => {
            if (isSuccess && response && response._embedded && response._embedded.tag) {
                let list = [];
                response._embedded.tag.map((item) => {
                    let twitterObj = {};
                    twitterObj.value = item.value;
                    list.push(twitterObj);
                });
                props.actions.setTweetsList(list);
            }
        });
    }

    const fetchTweetsByTagSearch = (data) => {
        props.actions.fetchTweetsByTagSearch(data, (response, isSuccess) => {
            if (isSuccess && response && response._embedded && response._embedded.quotes) {
                let quotelist = [];
                response._embedded.quotes.map((item) => {
                    let twitterObj = {};
                    twitterObj.value = item.value;
                    twitterObj.tag = item.tags.toString();
                    quotelist.push(twitterObj);
                });
                props.actions.setTweetsByTagSearch(quotelist);
                setShowQuote(true);
            }
        });
    }

    return (
        <Grid md={12} xs={12}>
            {props.twitter.twitList !== null && props.twitter.twitList !== undefined ?
                <div style={{ margin: 20 }}>
                    {props.twitter.twitList.map((list) => (
                        <div className={classes.section}>
                            <div onClick={() => {
                                fetchTweetsByTagSearch(list.value);
                            }} className={classes.sectionHeader}>{list.value}
                                <btn >
                                    <FontAwesomeIcon icon={!ShowQuote ? 'caret-right' : 'caret-down'} className={classes.imageStyle} />
                                </btn>
                            </div>

                            {props.twitter.twitResponse !== null && props.twitter.twitResponse !== undefined && props.twitter.twitResponse[0].tag === list.value ? <div>
                                {props.twitter.twitResponse.map((quote, i) => (
                                    <div>
                                        <span id={i} className={classes.quoteStyle}>{quote.value}</span><br /><br />
                                    </div>
                                ))}
                            </div> : ''}

                        </div>))}
                </div> : ''
            }
        </Grid >
    );
}

const mapStateToProps = (state) => ({
    user: state.user && state.user.data,
    twitter: state.twitter,
});

const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators({ ...Actions }, dispatch);

    return {
        actions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TwitterDashboard);