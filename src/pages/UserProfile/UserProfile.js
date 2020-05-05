import React,{useEffect,useState,useMemo} from 'react';
import {useAuth,useUserId} from '../../helper';
import {useDispatch,useSelector} from "react-redux";
import {asyncGetUserById,asyncUpdateUser} from '../../store/users/actions';
import defaultAvatar from '../../assets/image/avata.png';

const initeobjFileAvatar = {
  file:null,
  previewAvatar:''
};

function UserProfile(){
  useAuth();
  const userid = useUserId();
  const dispatch = useDispatch();
  const [userInfor,setUserInfor] = useState(null);
  const [objFileAvatar,setObjFileAvatar] = useState(initeobjFileAvatar);
  const currentUser = useSelector(function(state){
      return state.User.user
  });

  useEffect(()=>{
    setUserInfor(currentUser);
  },[currentUser]);

  useEffect(()=>{
      dispatch(asyncGetUserById({userid}))
      .then(res=>{
          if(!res.ok){
              alert("Có lỗi sảy ra, vui long thử lại");
          }
      })
      .catch(err=>{

      })
    },[userid,dispatch]);

    const finalAvatar = useMemo(()=>{
      if(!objFileAvatar.file){
        return userInfor?.profilepicture || defaultAvatar;
      }
      if(objFileAvatar.file && objFileAvatar.previewAvatar){
        return objFileAvatar.previewAvatar;
      }
    },[ userInfor, objFileAvatar]);

    const onChangeData = (e,keyField)=>{
      setUserInfor({
        ...userInfor,
        [keyField]:e.target.value
      })
    }

    const handleFile = (evt)=>{
      const listFiles = evt.target.files;
      if(listFiles.length){
        const file = listFiles[0];

        const reader = new FileReader();
        reader.onloadend = () =>{
          setObjFileAvatar({
            file,
            previewAvatar:reader.result
          })
        }
        console.log("file ngoài")
        reader.readAsDataURL(file);
      }
    }

    const onShowInputFile =()=>{
      //Dùng useRef của hook mà ko cần dùng DOM
      const inputFile = document.getElementById('fileAvt');
      if(inputFile && inputFile.click){inputFile.click();}
    }

    const handleSubmit = (e)=>{    
      e.preventDefault();
      const data = {
        avatar:objFileAvatar.file,
        fullname:userInfor.fullname,
        gender:userInfor.gender,
        description:userInfor.description
      }
      dispatch(asyncUpdateUser(data))
      .then(res=>{
        console.log("res : ");
      })
      .catch(err=>{
        console.log("err :",err);
      })
    }

    return(
        <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <p>Profile</p>
            <div className="ass1-login__form">
              <div className="avatar" onClick={onShowInputFile}>
                <img src={finalAvatar} alt="" />
              </div>
              <form action="#">
                <input 
                  type="text" 
                  value={userInfor?.fullname || ""}
                  onChange={(e)=>onChangeData(e,"fullname")}
                  className="form-control" 
                  placeholder="Tên ..." required 
                />
                <select 
                  className="form-control"
                  value={userInfor?.gender || ""}
                  onChange={(e)=>onChangeData(e,"gender")}
                >
                  <option value disabled>Giới tính</option>
                  <option value="name">Nam</option>
                  <option value="nu">Nữ</option>
                </select>
                <input
                  style={{
                    position:"fixed",
                    left:-1000,
                    opacity:0,

                  }} 
                  id="fileAvt"
                  type="file" 
                  name="avatar" 
                  placeholder="Ảnh đại diện" 
                  className="form-control" 
                  onChange={(e)=>handleFile(e)}
                />
                <textarea
                  className="form-control" 
                  cols={30} rows={5} 
                  placeholder="Mô tả ngắn ..." 
                  onChange={(e)=>onChangeData(e,"description")}
                  defaultValue={userInfor?.description || ""} 

                />
                <div className="ass1-login__send justify-content-center">
                  <button 
                    onClick={e=>handleSubmit(e)}
                    type="submit" 
                    className="ass1-btn"
                  >Cập nhật</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
}

export default UserProfile;