
const DoctorList = (req, res) => { 
    // res.send("ROOT")
    console.log("doctor List")
    res.status(200).json({statusCode: 200,data:{
      doctors: {
      type: "array",
      items: {
        id: "string",
        doctor_display_name: "string",
        doctor_image_url: {
          type: "string",
          description: "이미지 주소"
        },
        hospital_name: "string",
        hospital_address: "string",
        description: "string",
        hospital_img: {
          type: "string",
          description: "이미지 주소"
        }
      }
    }
  }});
}
  
  module.exports = { DoctorList }; // signUp 함수를 module 로 내보낸다.

  // doctorList: {
  //   url: "/v3/doctor/list",
  //   method: "get",
  //   description: "로그인한 사용자에게만 의사 목록을 내려줍니다.",
  //   headers: {
  //     Authorization: {
  //       type: "string",
  //       required: true,
  //       description: "'Bearer {{ token }}'을 전달해주세요."
  //     }
  //   },
  //   response: {
  //     success: {
  //       statusCode: 200,
  //       json: {
  //         status: "ok",
  //         data: {
  //           doctors: {
  //             type: "array",
  //             items: {
  //               id: "string",
  //               doctor_display_name: "string",
  //               doctor_image_url: {
  //                 type: "string",
  //                 description: "이미지 주소"
  //               },
  //               hospital_name: "string",
  //               hospital_address: "string",
  //               description: "string",
  //               hospital_img: {
  //                 type: "string",
  //                 description: "이미지 주소"
  //               }
  //             }
  //           }
  //        }
  //      }
  //     }
  //   }
  // }