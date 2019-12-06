const optionsListItems = navigation => [
  {
    title: 'Chatbot',
    iconName: 'robot',
    iconType: 'FontAwesome5',
    text:'Continue chatting with me',
    onPress: () => console.log('chatbot')
  },
  {
    title: 'Visit a Clinic',
    iconName: 'doctor',
    iconType: 'MaterialCommunityIcons',
    text:'Book An Appointment',
    onPress: () => navigation.navigate('ClinicVisit')
  },
  {
    title: 'Online Consultation',
    iconName: 'chat-bubble-outline',
    iconType: 'MaterialIcons',
    text:'Chat with our Doctors Online',
    onPress: () =>console.log('online consultation')
  },
  {
    title: 'House Calls',
    iconName: 'location-pin',
    iconType: 'Entypo',
    text:'Book House Visits',
    onPress: () => navigation.navigate('Book'),
  },
  
];

export default optionsListItems;
