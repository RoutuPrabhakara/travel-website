import React from 'react'

function Destination() {
    const data=[{
        img:"https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Name:"Trip1",
        para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minima maiores cum ex asperiores"
    },
    {
        img:"https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Name:"Trip2",
        para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minima maiores cum ex asperiores"
    },
    {
        img:"https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Name:"Trip3",
        para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minima maiores cum ex asperiores"
    }







]
  return (
    <div>
        
    <div className="destination text-center m-3 p-3">
        <h3>Popular Destinations</h3>
        <p>Tours give you the opportinity to see with in time </p>
        <h4>Toal Voicana Batangas</h4>
        <div className="images d-flex gap-2">
        <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, qui magnam quo voluptate nemo omnis vitae quas accusantium quaerat alias ut mollitia amet numquam nesciunt minima dolores aspernatur ipsam veniam!</p>
   
        <img src="https://th.bing.com/th?id=OIP.pGBobbM9oi38MfRAXA6ucAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
        <img src="https://th.bing.com/th?id=OIP.jHvTOSF7924Ah63W7mozxQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minima maiores cum ex asperiores et consectetur, reiciendis accusamus enim earum est doloremque suscipit exercitationem labore beatae, quaerat hic perspiciatis molestias!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem odit maiores voluptatum quisquam, excepturi eius ipsum, magni aspernatur inventore quasi laborum harum omnis ducimus eum. Assumenda inventore sapiente facere ipsa!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit iusto neque natus vel dolore voluptates veniam eaque, aliquam autem debitis, expedita excepturi obcaecati accusantium quia dolorum consectetur cumque tempore!</p>
    </div>
    <div className="destination text-center m-3 p-3">
    <div className="images d-flex gap-2">
       
        <img src="https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
        <img src="https://th.bing.com/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero aliquid officia aliquam assumenda nobis eos iste perferendis, voluptas labore minima ea quisquam. Nihil dicta, quod harum iusto debitis corporis!</p>
    </div>
        <h3>Mt daguildul Batanges</h3>
       
      
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minima maiores cum ex asperiores et consectetur, reiciendis accusamus enim earum est doloremque suscipit exercitationem labore beatae, quaerat hic perspiciatis molestias!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem odit maiores voluptatum quisquam, excepturi eius ipsum, magni aspernatur inventore quasi laborum harum omnis ducimus eum. Assumenda inventore sapiente facere ipsa!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit iusto neque natus vel dolore voluptates veniam eaque, aliquam autem debitis, expedita excepturi obcaecati accusantium quia dolorum consectetur cumque tempore!</p>
    </div>
<div className="h3 text-center mt-4">
    <h2>Recent Trips</h2>
    <p>You can discover unique destinations using Google Maps</p>
</div>
<div className="row p-3 p-md-5">
{
  
   
  data.map((item,index)=>(
     <div className='col-sm-12 col-md-4 data'>
     <div className="d-flex justify-content-center shadow card w-50px h-50px">
    <img className='images_file' src={item.img} alt=""  /> 
    </div>
    <h3>{item.Name}</h3>
    <p>{item.para}</p>
     <div/>
     </div>

 ))

}
</div>
    
    
    
    
    
    
    
    </div>
  )
}

export default Destination