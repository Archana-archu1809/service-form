import Header from "../../shared/commonComponents/header";
import {
  Card,
  Row,
  Col,
  Button,
  Layout,
  Modal,
  Form,
  Input,
  Radio,
  Select,
  Checkbox,
  Upload,
  message
} from "antd";
import { useEffect, useState } from "react";
import  Axios  from "axios";
import { useParams } from "react-router";
import axios from "axios";
const { Content } = Layout;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
};
const CreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Resume Headline"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
     
      <p>
        It is the first thing recruiters notice in your profile. Write concisely
        what makes you unique and right person for the job you are looking for.
      </p>
      <Form form={form} layout="vertical">
      <Form.Item label="Add Resume Headline" name="resumeHeadline"  rules={[
              {
                required: true,
                message: "Please input your resumeHeadline!",
              },
            ]}>
          <Input.TextArea placeholder="Type Resume Headline" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const CreateForm1 = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Add Employment"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
  
      <p>
        It is the first thing recruiters notice in your profile. Write concisely
        what makes you unique and right person for the job you are looking for.
      </p>
      <Form form={form} layout="vertical">
        <Form.Item label="Is this your current employment"name="currentEmp">
          <Radio.Group>
            <Radio value="Yes"> Yes </Radio>
            <Radio value="No"> No </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Employment Type"  name="empType">
          <Radio.Group>
            <Radio value="Full-time"> FullTime </Radio>
            <Radio value="Internship">Internship </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Current company Name" name="companyName">
          <Input placeholder="Type your Organization" />
        </Form.Item>
        <Form.Item label="Current Designation" name="Designation">
          <Input placeholder="Type your Organization" />
        </Form.Item>
        <Form.Item label="Skills Used" name="skillsUsed">
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item label="Job profile" name="jobProfile">
          <Input placeholder="Type here" />
        </Form.Item>

        <Form.Item label="Notice Period" name="noticePeriod">
          <Select placeholder="Select noticeperiod">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
const CreateForm2 = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Add education"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
   
      <p>
        It is the first thing recruiters notice in your profile. Write concisely
        what makes you unique and right person for the job you are looking for.
      </p>
      <Form form={form} layout="vertical">
       
        <Form.Item label="Education" name="Education"  rules={[
              {
                required: true,
                message: "Please input your Education!",
              },
            ]}>
          <Input placeholder="Select education" />
        </Form.Item>
        <Form.Item label="University/Institute" name="University"  rules={[
              {
                required: true,
                message: "Please input your university!",
              },
            ]}>
          <Input placeholder="Select University" />
        </Form.Item>
        <Form.Item label="Course" name="course"  rules={[
              {
                required: true,
                message: "Please input your course!",
              },
            ]}>
          <Input placeholder="Select course" />
        </Form.Item>
       
        <Form.Item label="Course Duration" name="courseDuration"  rules={[
              {
                required: true,
                message: "Please input your courseDuration!",
              },
            ]}
         >
          <Input placeholder="Select course duration" />
        </Form.Item>

      
      </Form>
    </Modal>
  );
};
const CreateForm3 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="IT Skills"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        
        <p>
        Specify details about programming languages (such as Java, Python, C/C++, Oracle, SQL etc), softwares (Microsoft Word, Excel, Tally etc) or any other software related knowledge.
        </p>
        <Form form={form} layout="vertical">
          <Form.Item label="Skill/Software Name" name="softwareName" rules={[
              {
                required: true,
                message: "Please input your software Name!",
              },
            ]}>
            <Input placeholder="skill" />
          </Form.Item>
          <Form.Item label="Software version" name="softwareVersion"rules={[
              {
                required: true,
                message: "Please input your software version!",
              },
            ]}>
            <Input placeholder="Select software" />
          </Form.Item>
         
  
          <Form.Item label="Last Used" name="lastUsed"rules={[
              {
                required: true,
                message: "Please input your lastUsed!",
              },
            ]}>
            <Select> 
              <Select.Option value="2002">2002</Select.Option>
              <Select.Option value="2001">2001</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Experience" name="experience" rules={[
              {
                required: true,
                message: "Please input your experience!",
              },
            ]}>
            <Input placeholder="Select experience" />
          </Form.Item>
          <Form.Item label="Months" name="months"rules={[
              {
                required: true,
                message: "Please input your months!",
              },
            ]}>
            <Input placeholder="Select months" ></Input>
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm4 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Add Project"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
       
        <p>
        Specify details about programming languages (such as Java, Python, C/C++, Oracle, SQL etc), softwares (Microsoft Word, Excel, Tally etc) or any other software related knowledge.
        </p>
        <Form form={form} layout="vertical">
          <Form.Item label="Project Title" name="project">
            <Input placeholder="Enter project Title" />
          </Form.Item>
          <Form.Item label="Client" name="client">
            <Input placeholder="Select client" />
          </Form.Item>
         
  
          <Form.Item label="ProjectStatus" name="projectStatus">
            <Select placeholder="select status">
              <Select.Option value="inProgress">Inprogress</Select.Option>
              <Select.Option value="completed">Completed</Select.Option>
            </Select>
            
          </Form.Item>
          <Select placeholder="select month">
              <Select.Option value="1">Jan</Select.Option>
              <Select.Option value="2">Feb</Select.Option>
            </Select>
          <Form.Item label="Details of project" name="DetailsProject">
            <Input placeholder="Select Details of project" />
          </Form.Item>
          <Form.Item label="Months" name="months">
            <Input placeholder="Select months" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm5 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Career Profile"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
        <p>
        This information will help the recruiters and Naukri know about your current job profile and also your desired job criteria. This will also help us personalize your job recommendations.
        </p>
        <Form form={form} layout="vertical">
          <Form.Item label="Current Industry" name="industry" rules={[
              {
                required: true,
                message: "Please input your Industry!",
              },
            ]}>
            <Input placeholder="Enter Current Industry" />
          </Form.Item>
          <Form.Item label="Department" name="department" rules={[
              {
                required: true,
                message: "Please input your department!",
              },
            ]}>
            <Input placeholder="Select Department" />
          </Form.Item>
          <Form.Item label="Role Category" name="roleCategory"  rules={[
              {
                required: true,
                message: "Please input your rolecategory!",
              },
            ]}>
            <Input placeholder="Select Role Category" />
          </Form.Item>
          <Form.Item label="Job Role" name="jobRole"  rules={[
              {
                required: true,
                message: "Please input your jobRole!",
              },
            ]}>
            <Input placeholder="Select Job Role" />
          </Form.Item>
         
          <Form.Item
        name="desiredJob"
        valuePropName="checked"
        label="Desired job type"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Permanent</Checkbox>
        <Checkbox>Temporary</Checkbox>
      </Form.Item>
       
          <Form.Item label="Preferred Work Location" name="preferredWork"  rules={[
              {
                required: true,
                message: "Please input your preferred work Location!",
              },
            ]}>
            <Input placeholder="Select Preferred Work Location" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm6 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Key Skills"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills. Each skill is separated by a comma.</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Key Skills" name="skills"  rules={[
              {
                required: true,
                message: "Please input your skills!",
              },
            ]}>
            <Input placeholder="Select Key Skills" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm7 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="ProfileSummary"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</p>
        <Form form={form} layout="vertical">
          <Form.Item label="Profile Summary" name="profileSummary"  rules={[
              {
                required: true,
                message: "Please input your profileSummary!",
              },
            ]}>
            <Input.TextArea placeholder="Please input your profilesummary" />
          </Form.Item>

      
      </Form>
      </Modal>
    );
  };
  const CreateForm8 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Personal Details"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</p>
        <Form form={form} layout="vertical">
       <Form.Item label="Gender"  rules={[
              {
                required: true,
                message: "Please input your gender!",
              },
            ]} name="gender">
          <Radio.Group>
            <Radio value="Male"> Male</Radio>
            <Radio value="Female"> Female </Radio>
            <Radio value="Transgender"> 
            Transgender </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Marital Status"  rules={[
              {
                required: true,
                message: "Please input your marital status!",
              },
            ]} name="maritalStatus">
          <Radio.Group>
            <Radio value="Single"> Single</Radio>
            <Radio value="Married"> Married </Radio>
            <Radio value="Widowed"> 
            Widowed</Radio>
            <Radio value="Divorced"> 
            Divorced </Radio>
            <Radio value="Separated">
            Separated </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Are you differnetly abled?"  rules={[
              {
                required: true,
               
              },
            ]}>
          <Radio.Group>
            <Radio value="Yes"> Yes</Radio>
            <Radio value="NO"> No</Radio>
        
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Have you taken a career break?" rules={[
              {
                required: true,
                message: "Please input your Have you taken a career break?!",
              },
            ]}>
          <Radio.Group>
            <Radio value="Yes"> Yes</Radio>
            <Radio value="NO"> No</Radio>
        
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Permanent Address" name="Address" rules={[
              {
                required: true,
                message: "Please input your address",
              },
            ]}>
            <Input placeholder="Type Permanent Address" />
          </Form.Item>
          <Form.Item label="Hometown" name="homeTown" rules={[
              {
                required: true,
                message: "Please input your hometown",
              },
            ]}>
            <Input placeholder="Type hometown" />
          </Form.Item>
          <Form.Item label="Pincode" name="pinCode"  rules={[
              {
                required: true,
                message: "Please input your pincode",
              },
            ]}>
            <Input placeholder="Type pincode" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm9 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Resume"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</p>
        <Form form={form} layout="vertical">
        <Form.Item name="Resume"label="Resume">
      <Upload {...props}>
    <Button type="danger" style={{borderRadius:"50px"}}>Upload Resume</Button>
    DOC, DOCx, PDF, RTF | Max: 2 MB
          <h5>Recruiters give first preference to candidates who have a resume</h5>
  </Upload>
      </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm10 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Online Profile"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your social profiles (e.g. Linkedin profile, Facebook profile, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Social Profile" name="socialProfile">
            <Input placeholder="Type profile" />
          </Form.Item>
          <Form.Item label="URL" name="socialUrl">
            <Input placeholder="Type URL" />
          </Form.Item>
          <Form.Item label="Description" name="socialDescription">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm11 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Work Samples"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your projects (e.g. Github links, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Work Title" name="workTitle">
            <Input placeholder="Type work title" />
          </Form.Item>
          <Form.Item label="URL" name="workUrl">
            <Input placeholder="Type URL" />
          </Form.Item>
          <Form.Item label="Description" name="workDescription">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm12 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Presentation"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your projects (e.g. Github links, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Presentation Title" name="presentationTitle">
            <Input placeholder="Type presentation title" />
          </Form.Item>
          <Form.Item label="URL" name="presentationUrl">
            <Input placeholder="Type URL" />
          </Form.Item>
          <Form.Item label="Description" name="presentationDescription">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm13 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Patent"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your projects (e.g. Github links, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Ptatent Title" name="patentTitle">
            <Input placeholder="Type patent title" />
          </Form.Item>
          <Form.Item label="URL" name="patentUrl">
            <Input placeholder="Type URL" />
          </Form.Item>
          <Form.Item label="Description" name="patentDescription">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm14 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Certification"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your projects (e.g. Github links, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="certification Title" name="certificationTitle">
            <Input placeholder="Type certification title" />
          </Form.Item>
          <Form.Item label="certification Complettion Id" name="certificationComplettionID">
            <Input placeholder="Type Id" />
          </Form.Item>
          <Form.Item label="Description" name="certificationId">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm15 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    const localstorage=localStorage.getItem("userdata");
    console.log(localstorage)
    return (
      <Modal
        open={open}
        title="Key Skills"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
     
     
        <Form form={form} layout="vertical">
        <Form.Item label="KeySkills" name="skills">
            <Input />
          </Form.Item>
         
        </Form>
      </Modal>
    );
  };
  const CreateForm16 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    const localstorage=localStorage.getItem("userdata");
    console.log(localstorage)
    return (
      <Modal
        open={open}
        title="Key Skills"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
     
     <p>
        It is the first thing recruiters notice in your profile. Write concisely
        what makes you unique and right person for the job you are looking for.
      </p>
      <Form form={form} layout="vertical">
        <Form.Item label="Is this your current employment"name="currentEmp">
          <Radio.Group>
            <Radio value="Yes"> Yes </Radio>
            <Radio value="No"> No </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Employment Type"  name="empType">
          <Radio.Group>
            <Radio value="Full-time"> FullTime </Radio>
            <Radio value="Internship">Internship </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Current company Name" name="companyName">
          <Input placeholder="Type your Organization" />
        </Form.Item>
        <Form.Item label="Current Designation" name="Designation">
          <Input placeholder="Type your Organization" />
        </Form.Item>
        <Form.Item label="Skills Used" name="skillsUsed">
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item label="Job profile" name="jobProfile">
          <Input placeholder="Type here" />
        </Form.Item>

        <Form.Item label="Notice Period" name="noticePeriod">
          <Select placeholder="Select noticeperiod">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      </Modal>
    );
  };
  const CreateForm17 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Add education"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
     
        <p>
          It is the first thing recruiters notice in your profile. Write concisely
          what makes you unique and right person for the job you are looking for.
        </p>
        <Form form={form} layout="vertical">
         
          <Form.Item label="Education" name="Education"  rules={[
                {
                  required: true,
                  message: "Please input your Education!",
                },
              ]}>
            <Input placeholder="Select education" />
          </Form.Item>
          <Form.Item label="University/Institute" name="University"  rules={[
                {
                  required: true,
                  message: "Please input your university!",
                },
              ]}>
            <Input placeholder="Select University" />
          </Form.Item>
          <Form.Item label="Course" name="course"  rules={[
                {
                  required: true,
                  message: "Please input your course!",
                },
              ]}>
            <Input placeholder="Select course" />
          </Form.Item>
         
          <Form.Item label="Course Duration" name="courseDuration"  rules={[
                {
                  required: true,
                  message: "Please input your courseDuration!",
                },
              ]}
           >
            <Input placeholder="Select course duration" />
          </Form.Item>
  
        
        </Form>
      </Modal>
    );
  };
  const CreateForm18 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="IT Skills"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        
        <p>
        Specify details about programming languages (such as Java, Python, C/C++, Oracle, SQL etc), softwares (Microsoft Word, Excel, Tally etc) or any other software related knowledge.
        </p>
        <Form form={form} layout="vertical">
          <Form.Item label="Skill/Software Name" name="softwareName" rules={[
              {
                required: true,
                message: "Please input your software Name!",
              },
            ]}>
            <Input placeholder="skill" />
          </Form.Item>
          <Form.Item label="Software version" name="softwareVersion"rules={[
              {
                required: true,
                message: "Please input your software version!",
              },
            ]}>
            <Input placeholder="Select software" />
          </Form.Item>
         
  
          <Form.Item label="Last Used" name="lastUsed"rules={[
              {
                required: true,
                message: "Please input your lastUsed!",
              },
            ]}>
            <Select> 
              <Select.Option value="2002">2002</Select.Option>
              <Select.Option value="2001">2001</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Experience" name="experience" rules={[
              {
                required: true,
                message: "Please input your experience!",
              },
            ]}>
            <Input placeholder="Select experience" />
          </Form.Item>
          <Form.Item label="Months" name="months"rules={[
              {
                required: true,
                message: "Please input your months!",
              },
            ]}>
            <Input placeholder="Select months" ></Input>
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm19 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Add Project"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
       
        <p>
        Specify details about programming languages (such as Java, Python, C/C++, Oracle, SQL etc), softwares (Microsoft Word, Excel, Tally etc) or any other software related knowledge.
        </p>
        <Form form={form} layout="vertical">
          <Form.Item label="Project Title" name="project">
            <Input placeholder="Enter project Title" />
          </Form.Item>
          <Form.Item label="Client" name="client">
            <Input placeholder="Select client" />
          </Form.Item>
         
  
          <Form.Item label="ProjectStatus" name="projectStatus">
            <Select placeholder="select status">
              <Select.Option value="inProgress">Inprogress</Select.Option>
              <Select.Option value="completed">Completed</Select.Option>
            </Select>
            
          </Form.Item>
          <Select placeholder="select month">
              <Select.Option value="1">Jan</Select.Option>
              <Select.Option value="2">Feb</Select.Option>
            </Select>
          <Form.Item label="Details of project" name="DetailsProject">
            <Input placeholder="Select Details of project" />
          </Form.Item>
          <Form.Item label="Months" name="months">
            <Input placeholder="Select months" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm20 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="ProfileSummary"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</p>
        <Form form={form} layout="vertical">
          <Form.Item label="Profile Summary" name="profileSummary"  rules={[
              {
                required: true,
                message: "Please input your profileSummary!",
              },
            ]}>
            <Input.TextArea placeholder="Please input your profilesummary" />
          </Form.Item>

      
      </Form>
      </Modal>
    );
  };
  const CreateForm21 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Online Profile"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your social profiles (e.g. Linkedin profile, Facebook profile, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Social Profile" name="socialProfile">
            <Input placeholder="Type profile" />
          </Form.Item>
          <Form.Item label="URL" name="socialUrl">
            <Input placeholder="Type URL" />
          </Form.Item>
          <Form.Item label="Description" name="socialDescription">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm22 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Work Samples"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your projects (e.g. Github links, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Work Title" name="workTitle">
            <Input placeholder="Type work title" />
          </Form.Item>
          <Form.Item label="URL" name="workUrl">
            <Input placeholder="Type URL" />
          </Form.Item>
          <Form.Item label="Description" name="workDescription">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm23 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Presentation"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your projects (e.g. Github links, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="Presentation Title" name="presentationTitle">
            <Input placeholder="Type presentation title" />
          </Form.Item>
          <Form.Item label="URL" name="presentationUrl">
            <Input placeholder="Type URL" />
          </Form.Item>
          <Form.Item label="Description" name="presentationDescription">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm24 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Certification"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Add links to your projects (e.g. Github links, etc.).</p>
        <Form form={form} layout="vertical">
        <Form.Item label="certification Title" name="certificationTitle">
            <Input placeholder="Type certification title" />
          </Form.Item>
          <Form.Item label="certification Complettion Id" name="certificationComplettionID">
            <Input placeholder="Type Id" />
          </Form.Item>
          <Form.Item label="Description" name="certificationId">
            <Input placeholder="Type here" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm25 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Career Profile"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
        <p>
        This information will help the recruiters and Naukri know about your current job profile and also your desired job criteria. This will also help us personalize your job recommendations.
        </p>
        <Form form={form} layout="vertical">
          <Form.Item label="Current Industry" name="industry" rules={[
              {
                required: true,
                message: "Please input your Industry!",
              },
            ]}>
            <Input placeholder="Enter Current Industry" />
          </Form.Item>
          <Form.Item label="Department" name="department" rules={[
              {
                required: true,
                message: "Please input your department!",
              },
            ]}>
            <Input placeholder="Select Department" />
          </Form.Item>
          <Form.Item label="Role Category" name="roleCategory"  rules={[
              {
                required: true,
                message: "Please input your rolecategory!",
              },
            ]}>
            <Input placeholder="Select Role Category" />
          </Form.Item>
          <Form.Item label="Job Role" name="jobRole"  rules={[
              {
                required: true,
                message: "Please input your jobRole!",
              },
            ]}>
            <Input placeholder="Select Job Role" />
          </Form.Item>
         
          <Form.Item
        name="desiredJob"
        valuePropName="checked"
        label="Desired job type"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Permanent</Checkbox>
        <Checkbox>Temporary</Checkbox>
      </Form.Item>
       
          <Form.Item label="Preferred Work Location" name="preferredWork"  rules={[
              {
                required: true,
                message: "Please input your preferred work Location!",
              },
            ]}>
            <Input placeholder="Select Preferred Work Location" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const CreateForm26 = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Personal Details"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
      
      <p>Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</p>
        <Form form={form} layout="vertical">
       <Form.Item label="Gender"  rules={[
              {
                required: true,
                message: "Please input your gender!",
              },
            ]} name="gender">
          <Radio.Group>
            <Radio value="Male"> Male</Radio>
            <Radio value="Female"> Female </Radio>
            <Radio value="Transgender"> 
            Transgender </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Marital Status"  rules={[
              {
                required: true,
                message: "Please input your marital status!",
              },
            ]} name="maritalStatus">
          <Radio.Group>
            <Radio value="Single"> Single</Radio>
            <Radio value="Married"> Married </Radio>
            <Radio value="Widowed"> 
            Widowed</Radio>
            <Radio value="Divorced"> 
            Divorced </Radio>
            <Radio value="Separated">
            Separated </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Are you differnetly abled?"  rules={[
              {
                required: true,
               
              },
            ]}>
          <Radio.Group>
            <Radio value="Yes"> Yes</Radio>
            <Radio value="NO"> No</Radio>
        
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Have you taken a career break?" rules={[
              {
                required: true,
                message: "Please input your Have you taken a career break?!",
              },
            ]}>
          <Radio.Group>
            <Radio value="Yes"> Yes</Radio>
            <Radio value="NO"> No</Radio>
        
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Permanent Address" name="Address" rules={[
              {
                required: true,
                message: "Please input your address",
              },
            ]}>
            <Input placeholder="Type Permanent Address" />
          </Form.Item>
          <Form.Item label="Hometown" name="homeTown" rules={[
              {
                required: true,
                message: "Please input your hometown",
              },
            ]}>
            <Input placeholder="Type hometown" />
          </Form.Item>
          <Form.Item label="Pincode" name="pinCode"  rules={[
              {
                required: true,
                message: "Please input your pincode",
              },
            ]}>
            <Input placeholder="Type pincode" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
function Index() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);
  const [open18, setOpen18] = useState(false);
  const [open19, setOpen19] = useState(false);
  const [open20, setOpen20] = useState(false);
  const [open21, setOpen21] = useState(false);
  const [open22, setOpen22] = useState(false);
  const [open23, setOpen23] = useState(false);
  const [open24, setOpen24] = useState(false);
  const [open25, setOpen25] = useState(false);
  const [open26, setOpen26] = useState(false);
  const [userData, setUserData] = useState({});
  const [result,setResult]=useState({})
  const onCreate = (values) => {
    console.log(values.resumeHeadline);
    setOpen(false);
    result.ResumeHeadline=values.resumeHeadline;
    setResult(result);
    console.log(result)
  };
  const onCreate1 = (values) => {
    console.log(values);
    setOpen1(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
    console.log(result)

  };
  const onCreate2 = (values) => {
    console.log(values);
    setOpen2(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate3 = (values) => {
    console.log(values);
    setOpen3(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
    console.log(result)
  };
  const onCreate4 = (values) => {
    console.log(values);
    setOpen4(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate5 = (values) => {
    console.log(values);
    setOpen5(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate6 = (values) => {
    console.log(values);
    setOpen6(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
    console.log(result)
  };
  const onCreate7 = (values) => {
    console.log(values);
    setOpen7(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate8 = (values) => {
    console.log(values);
    setOpen8(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate9 = (values) => {
    console.log(values);
    setOpen9(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate10 = (values) => {
    console.log(values);
    setOpen10(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate11 = (values) => {
    console.log(values);
    setOpen11(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate12 = (values) => {
    console.log(values);
    setOpen12(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate13 = (values) => {
    console.log(values);
    setOpen13(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate14 = (values) => {
    console.log(values);
    setOpen14(false);
    setResult((prevState)=>({
      ...prevState,
      ...values
    }));
  };
  const onCreate15 = (values) => {
    const id= localStorage.getItem("keyId");

    Axios.put(`http://localhost:8000/update/${id}`,{
      skills:values.skills,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate16 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      currentEmp:values.currentEmp,
      empType:values.empType,
      cmpyName:values.companyName,
      designation:values.Designation,
      skillsUsed:values.skillsUsed,
      jobProfile:values.jobProfile,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate17 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      education:values.Education,
    university:values.University,
    course:values.course,
    courseDuration:values.courseDuration,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate18 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      softwareName:values.softwareName,
      softwareVersion:values.softwareVersion,
      Experience:values.experience,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate19 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      project:values.project,
      client:values.client,
      projectStatus:values.projectStatus,
      DetailsProject:values.DetailsProject,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate20 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      profileSummary:values.profileSummary,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate21 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      SocialProfile:values.SocialProfile,
    socialUrl:values.socialUrl,
    SocialDescription:values.SocialDescription,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate22 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      workTitle:values.workTitle,
      workUrl:values.workUrl,
      WorkDescription:values.WorkDescription,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate23 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      presentationTitle:values.presentationTitle,
      presentationUrl:values.presentationUrl,
      presentationDescription:values.presentationDescription,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate24 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      certificationTitle:values.certificationTitle,
      certificationComplettionID:values.certificationComplettionID,
      certificationId:values.certificationId,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate25 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      CurrentIndsutry:values.industry,
      Department:values.department,
      RoleCategory:values.roleCategory,
      jobRole:values.jobRole,
      preferredType:values.preferredType,
      preferredWorkLocation:values.preferredWork,
      desiredJobType:values.desiredJobType,
      desiredEmploymentType:values.desiredEmploymentType,
      expectedSalary:values.expectedSalary,
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const onCreate26 = (values) => {
    const id= localStorage.getItem("keyId")
    Axios.put(`http://localhost:8000/update/${id}`,{
      gender:values.gender,
      maritalStatus:values.maritalStatus,
      DOb:values.DOb,
      Address:values.Address,
      homeTown:values.homeTown,
      pinCode:values.pinCode
    }).then((response)=>{
      console.log(response)
    })
   
  };
  const { UserId} = useParams();
  console.log(UserId)
  const data=localStorage.getItem("key")
  
  const config={
    headers:{
authorization:`Bearer` + data
    }
  }
  console.log(data)
 
  useEffect(()=>{
   const id= localStorage.getItem("id")
    Axios.get(`http://localhost:8000/datass/${id}`,{
      headers:{
        "x-access-token":localStorage.getItem("key")
      },
    }).then((response)=>{
      console.log(response.data[0])
      setUserData(response.data[0]);
      console.log(response.data[0].id)
      localStorage.setItem("keyId",userData.id)
      localStorage.setItem("userdata",userData.skills)
    })
  },[])
  
  useEffect(()=>{
    let result1= Object.keys (result).length;
    console.log(result1)

if(result ===52){
  Axios.post('http://localhost:8000/datass',{
    ResumeHeadline:result.resumeHeadline,
    skills:result.skills,
    currentEmp:result.currentEmp,
    empType:result.empType,
    cmpyName:result.companyName,
    designation:result.Designation,
    skillsUsed:result.skillsUsed,
    joiningDate:result.joiningDate,
    WorkedTill:result.WorkedTill,
    jobProfile:result.jobProfile,
    education:result.Education,
    university:result.University,
    course:result.course,
    courseDuration:result.courseDuration,
    softwareName:result.softwareName,
    softwareVersion:result.softwareVersion,
    Experience:result.experience,
    project:result.project,
    client:result.client,
    projectStatus:result.projectStatus,
    DetailsProject:result.DetailsProject,
    profileSummary:result.profileSummary,
    SocialProfile:result.SocialProfile,
    socialUrl:result.socialUrl,
    SocialDescription:result.SocialDescription,
    workTitle:result.workTitle,
    workUrl:result.workUrl,
    WorkDescription:result.WorkDescription,
    presentationTitle:result.presentationTitle,
    presentationUrl:result.presentationUrl,
    presentationDescription:result.presentationDescription,
    certificationTitle:result.certificationTitle,
    certificationComplettionID:result.certificationComplettionID,
    certificationId:result.certificationId,
    CurrentIndsutry:result.industry,
    Department:result.department,
    RoleCategory:result.roleCategory,
    jobRole:result.jobRole,
    preferredType:result.preferredType,
    preferredWorkLocation:result.preferredWork,
    desiredJobType:result.desiredJobType,
    desiredEmploymentType:result.desiredEmploymentType,
    expectedSalary:result.expectedSalary,
    gender:result.gender,
    maritalStatus:result.maritalStatus,
    DOb:result.DOb,
    Address:result.Address,
    homeTown:result.homeTown,
    pinCode:result.pinCode
  }).then((response)=>{
    console.log(response)
  })
}
  },[result]);


  return (
    <div>
      <Header />
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",

            alignItems: "center",
            backgroundColor: "lightgray",
            paddingTop: "40px",

            paddingBottom: "40px",
          }}
        >
          <Card style={{ width: "300px" }} bordered={false} title="Quick Links">
          
            <Row>
              <Col sm={12}>
                <h3>Resume Headline</h3>
               
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen(true);
                  }}>Add</Button>
              </Col>
            
            </Row>
            <Row>
              <Col sm={12}>
                <h3>Key skills</h3>
              
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen6(true);
                  }}>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h3>Employment</h3>
              
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen1(true);
                  }}>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h3>Education</h3>
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen2(true);
                  }}>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h3>IT skills</h3>
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen3(true);
                  }}>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h3>projects</h3>
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen4(true);
                  }}>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h3>profile summary</h3>
              </Col>
              <Col sm={12}>
                <Button type="link" onClick={() => {
                    setOpen7(true);
                  }}>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h3>Accomplishments</h3>
              </Col>
             
            </Row>
            <Row>
              <Col sm={12}>
                <h3>Career profile</h3>
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen5(true);
                  }}>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h3>Personal Details</h3>
              </Col>
              <Col sm={12}>
                <Button type="link"  onClick={() => {
                    setOpen8(true);
                  }}>Add</Button>
              </Col>
            </Row>
          </Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
          

            <Card style={{ width: "500px", margin: "4px" }} bordered={false}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Resume Headline</h4>
                <Button
                  type="link"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {" "}
                  Add Resume Headline
                </Button>
                
                <CreateForm
                  open={open}
                  onCreate={onCreate}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </div>
              {userData.ResumeHeadline === "" ? <p>
                It is the first thing recruiters notice in your profile. Write
                concisely what makes you unique and right person for the job you
                are looking for.
              </p>:  <h3>{userData.ResumeHeadline}</h3>}

             
             
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Key Skills</h4>
                <Button
                  type="link"
                  onClick={() => {
                    setOpen6(true);
                  }}
                >
                  {" "}
                 Key Skills
                </Button>
                
                <Button onClick={()=>setOpen15(true)}>Update</Button>
                <CreateForm6
                data={userData}
                  open={open6}
                  onCreate={onCreate6}
                  onCancel={() => {
                    setOpen6(false);
                  }}
                />
                <CreateForm15 open={open15} onCreate={onCreate15}
                  onCancel={() => {
                    setOpen15(false);
                  }}/>
              </div>
              <h3>{userData.skills}</h3>
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Employment</h4>
                <Button
                  type="link"
                  onClick={() => {
                    setOpen1(true);
                  }}
                >
                  Add Employment
                </Button>
                <Button onClick={()=>setOpen16(true)}>Update</Button>
                <CreateForm1
                  open={open1}
                  onCreate={onCreate1}
                  onCancel={() => {
                    setOpen1(false);
                  }}
                />
                <CreateForm16 open={open16} onCreate={onCreate16}
                  onCancel={() => {
                    setOpen16(false);
                  }}/> 
              </div>
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Education</h4>
                <Button
                  type="link"
                  onClick={() => {
                    setOpen2(true);
                  }}
                >
                  Add Education
                </Button>
                <Button onClick={()=>setOpen17(true)}>Update</Button>
                <CreateForm2
                  open={open2}
                  onCreate={onCreate2}
                  onCancel={() => {
                    setOpen2(false);
                  }}
                />
                   <CreateForm17 open={open17} 
                   onCreate={onCreate17}
                  onCancel={() => {
                    setOpen17(false);
                  }}/>
              </div>
              <h3>{userData.education}</h3>
              <h3>{userData.university}</h3>
              
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>IT Skills</h4>
                <Button type="link"  onClick={() => {
                    setOpen3(true);
                  }}> Add Details</Button>
                        <Button onClick={()=>setOpen18(true)}>Update</Button>
                <CreateForm3
                  open={open3}
                  onCreate={onCreate3}
                  onCancel={() => {
                    setOpen3(false);
                  }}
                />
                <CreateForm18
                  open={open18}
                  onCreate={onCreate18}
                  onCancel={() => {
                    setOpen18(false);
                  }}
                />
              </div>
            <h3>SoftwareName:  {userData.softwareName}</h3>
              <h3>Software Version :{userData.softwareVersion}</h3>
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Projects</h4>
                <Button onClick={()=>setOpen19(true)}>Update</Button>
                <Button type="link"  onClick={() => {
                    setOpen4(true);
                  }}> Add Projects</Button>
                    <CreateForm4
                  open={open4}
                  onCreate={onCreate4}
                  onCancel={() => {
                    setOpen4(false);
                  }}
                />
                 <CreateForm19
                  open={open19}
                  onCreate={onCreate19}
                  onCancel={() => {
                    setOpen19(false);
                  }}
                />
              </div>
              <p>
                Add details about projects you have done in college, internship
                or at work.
              </p>
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3> Profile Summary</h3>
                <Button type="link" onClick={() => {
                    setOpen7(true);
                  }}>Add</Button>
                      <Button onClick={()=>setOpen20(true)}>Update</Button>
                    <CreateForm7
                  open={open7}
                  onCreate={onCreate7}
                  onCancel={() => {
                    setOpen7(false);
                  }}
                />
                 <CreateForm20
                  open={open20}
                  onCreate={onCreate20}
                  onCancel={() => {
                    setOpen20(false);
                  }}
                />
              </div>
              <h3>{userData.profileSummary}</h3>
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
              <h3>Accomplishments</h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Online profile</h3>
                <Button onClick={()=>setOpen21(true)}>Update</Button>
                <Button type="link"  onClick={() => {
                    setOpen10(true);
                  }}>Add</Button>
                  <CreateForm10
                  open={open10}
                  onCreate={onCreate10}
                  onCancel={() => {
                    setOpen10(false);
                  }}
                />
                 <CreateForm21
                  open={open21}
                  onCreate={onCreate21}
                  onCancel={() => {
                    setOpen21(false);
                  }}
                />
              </div>
              <p>Add link to Online profiles (e.g. Linkedin, Facebook etc.).</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Work Sample</h3>
                <Button type="link" onClick={() => {
                    setOpen11(true);
                  }}>Add</Button>
                    <Button onClick={()=>setOpen22(true)}>Update</Button>
                <CreateForm11
                  open={open11}
                  onCreate={onCreate11}
                  onCancel={() => {
                    setOpen11(false);
                  }}
                />
                 <CreateForm22
                  open={open22}
                  onCreate={onCreate22}
                  onCancel={() => {
                    setOpen22(false);
                  }}
                />
              </div>
              <p>Add link to your Projects (e.g. Github links etc.).</p>
              
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Presentation</h3>
                <Button type="link" onClick={() => {
                    setOpen12(true);
                  }}>Add</Button>
                  <Button onClick={()=>setOpen23(true)}>Update</Button>
                <CreateForm12
                  open={open12}
                  onCreate={onCreate12}
                  onCancel={() => {
                    setOpen12(false);
                  }}
                />
                <CreateForm23
                  open={open23}
                  onCreate={onCreate23}
                  onCancel={() => {
                    setOpen23(false);
                  }}
                />
              </div>
              <p>
                Add links to your Online presentations (e.g. Slideshare
                presentation links etc.).
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Patent</h3>
                <Button type="link" onClick={() => {
                    setOpen13(true);
                  }}>Add</Button>
                     
                <CreateForm13
                  open={open13}
                  onCreate={onCreate13}
                  onCancel={() => {
                    setOpen13(false);
                  }}
                />
               
              </div>
              <p>Add details of Patents you have filed.</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Certification</h3>
                <Button type="link"onClick={() => {
                    setOpen14(true);
                  }}>Add</Button>
                  <Button onClick={()=>setOpen24(true)}>Update</Button>
                <CreateForm14
                  open={open14}
                  onCreate={onCreate14}
                  onCancel={() => {
                    setOpen14(false);
                  }}
                />
                 <CreateForm24
                  open={open24}
                  onCreate={onCreate24}
                  onCancel={() => {
                    setOpen24(false);
                  }}
                />
              </div>
              <p>Add details of Certifications you have achieved/completed</p>
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
             
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Career Profile</h3>
               
                <Button type="link"  onClick={() => {
                    setOpen5(true);
                  }}>Add</Button>
                   <Button onClick={()=>setOpen25(true)}>Update</Button>
                <CreateForm5
                  open={open5}
                  onCreate={onCreate5}
                  onCancel={() => {
                    setOpen5(false);
                  }}
                />
                <CreateForm25
                  open={open25}
                  onCreate={onCreate25}
                  onCancel={() => {
                    setOpen25(false);
                  }}
                />
              </div>
            </Card>
            <Card style={{ width: "500px", margin: "4px" }}>
             
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Personal Details</h3>
                <Button type="link"   onClick={() => {
                    setOpen8(true);
                  }}>Add</Button>
                   <Button onClick={()=>setOpen26(true)}>Update</Button>
                <CreateForm8
                  open={open8}
                  onCreate={onCreate8}
                  onCancel={() => {
                    setOpen8(false);
                  }}
                />
                  <CreateForm26
                  open={open26}
                  onCreate={onCreate26}
                  onCancel={() => {
                    setOpen26(false);
                  }}
                />
              </div>
              <div>
                <h2>Personal</h2>
              <h3>{userData.gender}</h3>
              <h3>{userData.maritalStatus}</h3>

              </div>
              <h3>Address:{userData.Address}</h3>
              <h3>Hpmetown:{userData.homeTown}</h3>
              <h3>PinCode:{userData.pinCode}</h3>
              
            </Card>
          </div>
        </div>
      </Content>
    </div>
  );
}
export default Index;
