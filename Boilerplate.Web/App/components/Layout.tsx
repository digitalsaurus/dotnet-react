import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <div id="app-root">
                <div id="view-wrap">
                    <div id="view-nav">
                        <NavMenu />
                    </div>
                    <div id="view-main">
                        <div id="view-body-container">
                            <div id="view-body">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
