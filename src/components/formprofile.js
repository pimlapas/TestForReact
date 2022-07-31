import 'bootstrap/dist/css/bootstrap.min.css';
import './Formprofile.css'


const FormProfile = () =>{
   
    return(
        
        <div>
            <form>
            

            <label>ชื่อจริง</label>
                <div className="form-control">
                    <input type="text" placeholder="ระบุชื่อจริง"/>
                </div>

                <label >นามสกุล</label>
                <div className="form-control">
                    <input type="text" placeholder="ระบุนามสกุล"/>
                </div>

                
                <label >เบอร์โทร</label>
                <div className="form-control">
                    <input type="text" placeholder="ระบุเบอร์โทร"/>
                </div>

               <br></br>
                    <center><button type="submit" class="btn btn-primary mb-2" >ทำการนัดหมาย</button></center>
                

            </form>
        </div>
    );

}

export default FormProfile;