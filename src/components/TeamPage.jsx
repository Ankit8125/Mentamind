import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: "path_to_image",
      bio: "John is the CEO with over 20 years of experience in the industry."
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "path_to_image",
      bio: "Jane is the CTO, leading our tech initiatives with innovative solutions."
    },
    // Add more team members as needed
  ];

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Our Team</h1>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={member.image} alt={member.name} />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-green-700">{member.name}</h2>
                  <p className="text-green-600">{member.position}</p>
                  <p className="text-gray-700 mt-4">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
