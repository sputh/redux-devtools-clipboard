import React, { Component, PropTypes } from 'react';
import getParams from 'get-params';
import * as themes from 'redux-devtools-themes';
import CopyToClipboard from 'react-copy-to-clipboard';

const styles = {
    container: {
        fontFamily: 'monaco,Consolas,Lucida Console,monospace',
        position: 'relative',
        textAlign: 'center',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderColor: 'transparent',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        cursor: 'pointer',
        fontWeight: 'bold',
        borderRadius: 3,
        padding: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 5,
        marginBottom: 5,
        flexGrow: 1,
        display: 'inline-block',
        fontSize: '0.8em',
        color: 'white',
        textDecoration: 'none',
        borderWidth: 0,
        outline: 0,
    },
};

const serialize = (obj) => {
    return JSON.stringify(obj);
};

export default class Pasteboard extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

    static propTypes = {
        dispatch: PropTypes.func,
        computedStates: PropTypes.array,
        actionsById: PropTypes.object,
        stagedActionIds: PropTypes.array,
        skippedActionIds: PropTypes.array,
        monitorState: PropTypes.shape({
            initialScrollTop: PropTypes.number
        }),
        theme: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
    };

    static defaultProps = {
        theme: 'nicinabox',
    };

    static update = () => {};

    getTheme() {
        let { theme } = this.props;
        if (typeof theme !== 'string') {
            return theme;
          }

        if (typeof themes[theme] !== 'undefined') {
            return themes[theme];
        }

        console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
        return themes.nicinabox;
    }

    render() {
        const theme = this.getTheme();
        const {
            actionsById,
            computedStates,
            stagedActionIds,
        } = this.props;

        return (
          <div
              style={{
                  ...styles.container,
                  background: theme.base00,
                  borderColor: theme.base02,
              }}
          >
                <CopyToClipboard
                    text={serialize(computedStates[computedStates.length - 1])}
                >
                    <button style={{
                        ...styles.button,
                        background: theme.base02,
                    }}>
                        Copy State
                    </button>
                </CopyToClipboard>
                <CopyToClipboard
                    text={serialize(stagedActionIds.map((id) => actionsById[id].action))}
                >
                    <button style={{
                        ...styles.button,
                        background: theme.base02,
                    }}>
                        Copy Actions
                    </button>
                </CopyToClipboard>
          </div>
        );
    }
}
