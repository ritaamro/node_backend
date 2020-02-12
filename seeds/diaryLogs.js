exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("DiaryLogs")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("DiaryLogs").insert([
				{
					Type: "Symptoms",
					LogMessage: "Diarrhea and fever",
					UserID: 1,
					PetID: 1
				},
				{
					Type: "Nutrition",
					LogMessage: "Last weigh-in: 30.2Kg",
					UserID: 1,
					PetID: 1
				},
				{
					Type: "Medicines",
					LogMessage: "Panacur",
					UserID: 1,
					PetID: 1
				},
				{
					Type: "Events",
					LogMessage: "Check-up with Dr. Muller",
					UserID: 1,
					PetID: 1
				},
				{
					Type: "Other Notes",
					LogMessage: "Today I gave Simba new food, fingers crossed!",
					UserID: 1,
					PetID: 1
				}
			]);
		});
};
