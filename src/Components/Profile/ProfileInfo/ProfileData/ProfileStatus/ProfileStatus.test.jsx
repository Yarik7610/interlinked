import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
    test('status from props should be in hook state', () => {
        const component = create(<ProfileStatus status = 'bomba'/>)
        const instance = component.getInstance()

        expect(instance.props.status).toBe('bomba')

    })
})