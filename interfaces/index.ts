export interface LinkItemProps {
  page: {
    name: string;
    path: string;
  };
  length: number;
  index: number;
  pageName: string;
}

export interface Testimonials {
  id: number;
  title: string;
  img: string;
  name: string;
  companyPosition: string;
  testimonial: string;
}

export interface TestimonialsProps {
  title: string;
}

export interface TestimonialCardProps {
  title: string;
  img: string;
  name: string;
  companyPosition: string;
  testimonial: string;
}

export interface TestimonialCrouselCardProps {
  testimonials: Testimonials[];
}

export interface Locale {
  code: string;
  file: string;
  iso: string;
  name: string;
}

export interface ImageProps {
  img: string;
  alt: string;
  sizes?: string;
}

export interface RichTextWithBlockImageProps {
  sectionTitle: string;
  sectionSubTitle: string;
}

export interface WhatWeDo {
  id: number;
  translationTitle: string;
  translationContent: string;
  img: string;
}

export interface ImageWithTextItemProps {
  sectionTitle: string;
}

export interface ourCustomersProps {
  id: number;
  title: string;
  subtitle1: string;
  content1: string;
  subtitle2: string;
  content2: string;
  imageLeft?: boolean;
  img: string;
}

export interface RichTextWithImageProps {
  sectionTitle: string;
}

export interface WhatWeStandForProps {
  id: number;
  translationTitle: string;
  translationContent: string;
  img: string;
}

export interface HomePageLogos {
  id: number;
  src: string;
  alt: string;
}

export interface Page {
  name: string;
  path: string;
  translationTag: string;
}

export interface ImageWithTextProps {
  title: string;
  subtitle1: string;
  content1: string;
  subtitle2: string;
  content2: string;
  imageLeft?: boolean;
}

export interface workflowProps {
  title: string;
  content: string;
  number: string;
}

export interface WorkflowItemProps {
  id: number;
  title: string;
  content: string;
  number: string;
}

export interface WorkflowSectionProps {
  sectionTitle: string;
}

export interface ButtonProps {
  path: string;
  text?: string;
  styleType: 'primary' | 'secondary';
  type: 'button' | 'submit';
  isUppercase?: boolean;
  isLink: boolean;
}

export interface ButtonSubmitProps {
  text: string;
  styleType: 'primary' | 'secondary';
  type: 'button' | 'submit';
  isUppercase?: boolean;
}

export interface LogoSliderSettings {
  itemsToShow: number;
  snapAlign: string;
}

export interface LogoSliderBreakpoints {
  767: LogoSliderSettings;
  1024: LogoSliderSettings;
}

export interface LogoSlides {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface InputProps {
  label?: string;
  modelValue: string;
  placeholder: string;
  type: 'text' | 'email' | 'number';
}

export interface TextareaProps {
  label?: string;
  rows?: number;
  cols?: number;
  modelValue: string;
  placeholder: string;
}

export interface Form {
  name: {
    isRequired: boolean;
    content: string;
  };
  company: {
    isRequired: boolean;
    content: string;
  };
  phone: {
    isRequired: boolean;
    content: string;
  };
  email: {
    isRequired: boolean;
    content: string;
  };
  store: {
    isRequired: boolean;
    content: string;
  };
  details: {
    isRequired: boolean;
    content: string;
  };
}

export interface ErrorKey {
  [key: string]: string;
}

export interface PipedrivePersonData {
  name: string;
  phone: string;
  email: string;
  '852fd8636898206f71601fcc03a6bcec456a3213': string;
}

export interface PipedriveDeal {
  [key: string]: string | number;
}

export interface PageBannerProps {
  srcDesktop: string;
  srcMobile: string;
  alt: string;
  pageHeading: string;
}

/*
  PIPEDRIVE TYPES
 */

export interface CreatorUserId {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: string;
  active_flag: boolean;
  value: number;
}

export interface UserId {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: string;
  active_flag: boolean;
  value: number;
}

export interface Email {
  label: string;
  value: string;
  primary: boolean;
}

export interface Phone {
  label: string;
  value: string;
  primary: boolean;
}

export interface PersonId {
  active_flag: boolean;
  name: string;
  email: Email[];
  phone: Phone[];
  owner_id: number;
  value: number;
}

export interface Data {
  id: number;
  creator_user_id: CreatorUserId;
  user_id: UserId;
  person_id: PersonId;
  org_id?: any;
  stage_id: number;
  title: string;
  value: number;
  currency: string;
  add_time: string;
  update_time: string;
  stage_change_time?: any;
  active: boolean;
  deleted: boolean;
  status: string;
  probability?: any;
  next_activity_date?: any;
  next_activity_time?: any;
  next_activity_id?: any;
  last_activity_id?: any;
  last_activity_date?: any;
  lost_reason?: any;
  visible_to: string;
  close_time?: any;
  pipeline_id: number;
  won_time?: any;
  first_won_time?: any;
  lost_time?: any;
  products_count: number;
  files_count: number;
  notes_count: number;
  followers_count: number;
  email_messages_count: number;
  activities_count: number;
  done_activities_count: number;
  undone_activities_count: number;
  participants_count: number;
  expected_close_date?: any;
  last_incoming_mail_time?: any;
  last_outgoing_mail_time?: any;
  label?: any;
  '0fdcbd3594afdc3259d2f109455d457dd434b6c3'?: any;
  '92a748698045972d363de50066121adebea10ca9'?: any;
  '8057c0bd4eeaf143bc2db0a2a6dcb01f4c76ea7a'?: any;
  '8057c0bd4eeaf143bc2db0a2a6dcb01f4c76ea7a_currency'?: any;
  '02d3c2c1802bbbda0311a89ae51088ff2a78abe9'?: any;
  eaa88887c035980f4c5b6421456fc2a794c766de?: any;
  aec2ba39fe04d0a5a17ad88a6590b38190a77f5d?: any;
  d6350df6d74a165ca7c439a08cf6ee867d6c70d1: string;
  renewal_type: string;
  stage_order_nr: number;
  person_name: string;
  org_name?: any;
  next_activity_subject?: any;
  next_activity_type?: any;
  next_activity_duration?: any;
  next_activity_note?: any;
  group_id?: any;
  group_name?: any;
  formatted_value: string;
  weighted_value: number;
  formatted_weighted_value: string;
  weighted_value_currency: string;
  rotten_time?: any;
  owner_name: string;
  cc_email: string;
  '1507f5274f7b19988574d28cc7f74faecd07562e'?: any;
  org_hidden: boolean;
  person_hidden: boolean;
}

export interface User {
  [key: string]: {
    id: number;
    name: string;
    email: string;
    has_pic: number;
    pic_hash: string;
    active_flag: boolean;
  };
}

export interface Email2 {
  label: string;
  value: string;
  primary: boolean;
}

export interface Phone2 {
  label: string;
  value: string;
  primary: boolean;
}

export interface Person {
  [key: string]: {
    active_flag: boolean;
    id: number;
    name: string;
    email: Email2[];
    phone: Phone2[];
    owner_id: number;
  };
}

export interface RelatedObjects {
  user: User;
  person: Person;
}

export interface PipedriveAPIResponse {
  success: boolean;
  data: Data;
  related_objects: RelatedObjects;
}
