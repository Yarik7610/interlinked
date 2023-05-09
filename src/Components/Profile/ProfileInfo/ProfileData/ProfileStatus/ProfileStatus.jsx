import React, { useState, useEffect} from "react"

const ProfileStatus = (props) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => setStatus(props.status), [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
       setEditMode(false)
       props.updateStatus(status)
    }

    return (  
     
        <div>
            {!editMode 
            ? <div><span onDoubleClick = {activateEditMode}>{props.status || "---"}</span></div> //тут старый статус пока на серв идут данные
            : <div>
                <input 
                    onChange = {(e) => {setStatus(e.currentTarget.value)}}
                    autoFocus = {true} onBlur = {deactivateEditMode} 
                    value={status}
                />
            </div>  
            }
        </div>
    );
}
 
export default ProfileStatus;


















// import React from "react"

// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//     onStatusChange = (e) => {
//         this.setState({
//            status: e.currentTarget.value
//         })
//     }
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatus(this.state.status)
//     }
//     render() {

//         return (
//             <div>
//                 {!this.state.editMode 
//                 ? <div><span onDoubleClick = {this.activateEditMode}>{this.props.status || "---"}</span></div> //тут старый статус пока на серв идут данные
//                 : <div>
//                     <input 
//                     onChange = {this.onStatusChange}
//                     autoFocus = {true} onBlur = {this.deactivateEditMode} 
//                     value={this.state.status}
//                     />
//                 </div>
//                 }
                
//             </div>
//         )
//     }
// }
// export default ProfileStatus






















