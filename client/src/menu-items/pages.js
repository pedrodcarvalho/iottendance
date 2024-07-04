import { UserAddOutlined, EditOutlined, AppstoreAddOutlined, CheckSquareOutlined, CheckCircleOutlined } from '@ant-design/icons';

const icons = {
  UserAddOutlined,
  EditOutlined,
  AppstoreAddOutlined,
  CheckSquareOutlined,
  CheckCircleOutlined
};

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'add-student',
      title: 'Add Student',
      type: 'item',
      url: '/add-student',
      icon: icons.UserAddOutlined
    },
    {
      id: 'edit-student',
      title: 'Edit Student',
      type: 'item',
      url: '/edit-student',
      icon: icons.EditOutlined
    },
    {
      id: 'add-class',
      title: 'Add Class',
      type: 'item',
      url: '/add-class',
      icon: icons.AppstoreAddOutlined
    },
    {
      id: 'attendance-check',
      title: 'Attendance Check',
      type: 'item',
      url: '/attendance-check',
      icon: icons.CheckSquareOutlined
    },
    {
      id: 'student-presence',
      title: 'Student Presence',
      type: 'item',
      url: '/student-presence',
      icon: icons.CheckCircleOutlined
    }
  ]
};

export default pages;
