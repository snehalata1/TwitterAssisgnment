/* eslint-disable */
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { connect } from 'react-redux';

const override = css`
position: fixed;
top: 50%;
left: 50%;
`;


// const useStyles = makeStyles((theme) => ({
//     loaderPossition: {
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//     },
// }));

export const ScreenLoader = (props) => {
    //const classes = useStyles();
    const { count } = props.api;
    return (
        <>
            <div className={`${count > 0 ? 'overlayScreen' : ''}`}>
                <div className='sweet-loading'>
                    <ScaleLoader
                        css={override}
                        height={35}
                        width={6}
                        radius={4}
                        margin='4px'
                        color={'#273eb0'}
                        loading={count > 0 ? true : false}
                    />
                </div>
            </div>
        </>
    );

}

const mapStateToProps = (state) => ({
    api: state.api,
})

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenLoader);

