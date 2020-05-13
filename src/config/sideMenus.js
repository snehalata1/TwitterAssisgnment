/* eslint-disable */
import NormalAppointmentImg from '../images/LeftNav/normal-appointment-icon.svg';
import HoverAppointmentImg from '../images/LeftNav/hover-appointment-icon.svg';
import ActiveAppointmentImg from '../images/LeftNav/active-appointment-icon.svg';

import NormalCalendarImg from '../images/LeftNav/normal-doctor-calendar-icon.svg';
import HoverCalendarImg from '../images/LeftNav/hover-doctor-calendar-icon.svg';
import ActiveCalendarImg from '../images/LeftNav/active-doctor-calendar-icon.svg';

import NormalBillingImg from '../images/LeftNav/normal-billing-icon.svg';
import HoverBillingImg from '../images/LeftNav/hover-billing-icon.svg';
import ActiveBillingImg from '../images/LeftNav/active-billing-icon.svg';

import NormalAllPatientImg from '../images/LeftNav/normal-all-patients-icon.svg';
import HoverAllPatientImg from '../images/LeftNav/hover-all-patients-icon.svg';
import ActiveAllPatientImg from '../images/LeftNav/active-all-patients-icon.svg';

import AddAppointments from '../images/add-appointment.svg';

import AddPatient from '../images/add-patients.svg';

export default [
  {
    label: 'Appointments',
    path: "/doctor-dashboard/",
    image: HoverAppointmentImg, // NormalAppointmentImg,
    activeImage: ActiveAppointmentImg,
    hoverImage: HoverAppointmentImg,
    hasCountLabel: true,
    key: 'appointments',
    multiplePaths: ['/doctor-dashboard/',
      '/doctor-dashboard/all',
      '/doctor-dashboard/upcoming',
      '/doctor-dashboard/waiting',
      '/doctor-dashboard/active',
      '/doctor-dashboard/completed',
      '/doctor-dashboard/canceled'],
  },

  {
    label: `Calendar`,
    image: NormalCalendarImg,
    activeImage: ActiveCalendarImg,
    hoverImage: HoverCalendarImg,
    path: '/doctor-calendar',
  },
 
  {
    label: 'Patient',
    image: NormalAllPatientImg,
    activeImage: ActiveAllPatientImg,
    hoverImage: HoverAllPatientImg,
    path: '/all-patients',
  },
  
  {
    label: 'Add Patient',
    isHeader: true,
    image: AddPatient,
    hasAdd: true,
    isModal: true,
    name: 'addpatient'
  },

  {
    label: 'Add Appointment',
    isHeader: true,
    image: AddAppointments,
    hasAdd: true,
    isModal: true,
    name: 'addappointment'
  },

  {
    label: 'Billing',
    image: NormalBillingImg,
    activeImage: ActiveBillingImg,    
    hoverImage: HoverBillingImg,
    path: ['/billing-setting', '/invoices', '/billing-report', "/itemized-billing"],
    isSubMenu: true,
    subMenuList: [
      {
        label: 'Setting',
        subPath: '/billing-setting',
      },
      {
        label: 'Invoice',
        subPath: '/invoices',
      },
      {
        label: 'Reports',
        subPath: '/billing-report',
      }
    ]
  },
];

export const receptionistSideMenus = [
  {
    label: 'Add Appointment',
    image: AddAppointments,
    isHeader: true,
    hasAdd: true,
    isModal: true,
    name: 'addappointment'
  },
  {
    label: 'All Appointments',
    path: "/receptionist-dashboard/",
    image: NormalAppointmentImg,
    activeImage: ActiveAppointmentImg,
    hoverImage: HoverAppointmentImg,
    hasCountLabel: true,
    key: 'appointments',
    multiplePaths: ['/receptionist-dashboard/',
      '/receptionist-dashboard/all',
      '/receptionist-dashboard/upcoming',
      '/receptionist-dashboard/waiting',
      '/receptionist-dashboard/active',
      '/receptionist-dashboard/completed',
      '/receptionist-dashboard/canceled'],
  },
  {
    label: `Receptionist's Calendar`,
    image: NormalCalendarImg,
    activeImage: ActiveCalendarImg,    
    hoverImage: HoverCalendarImg,
    path: '/receptionist-calendar',
  },
  {
    label: 'Billing',
    image: NormalBillingImg,
    activeImage: ActiveBillingImg,
    hoverImage: HoverBillingImg,
    path: ['/billing-setting', '/invoices', '/billing-report', '/itemized-bill'],
    isSubMenu: true,
    subMenuList: [
      {
        label: 'Setting',
        subPath: '/billing-setting',
      },
      {
        label: 'Invoice',
        subPath: '/invoices',
      },
      {
        label: 'Reports',
        subPath: '/billing-report',
      }
    ]
  },
];

