import React, { Component } from 'react';
import '../../common/css/yzdr/foot.scss'
import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;
function foot({ }) {
    return (
        <div className="footsdr">
            <ButtonGroup>
                <Button type="primary">
                    在线咨询
                    </Button>
                <Button type="primary">
                    咨询达人
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default foot;