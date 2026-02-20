export const generateNotes = async (req, res) => {
  try {
    const {
      topic,
      classLevel,
      examType,
      revisionMode = false,
      includeDiagram = false,
      includeCharts = false,
    } = req.body;

    
    if (!topic) {
      
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    
    if (user.credits < 10) {
      user.isCreditsAvailable = false;
      await user.save();
      return res.status(400).json({ success: false, message: "Insufficient credits" });
    }

    
    const prompt = buildPrompt({
      topic,
      classLevel,
      examType,
      revisionMode,
      includeDiagram,
      includeCharts
    });

    const aiResponse = await generateGeminiResponse(prompt);

    
    const notes = await NotesModel.create({
      user: user._id,
      topic,
      classLevel,
      examType,
      revisionMode,
      includeDiagram,
      includeCharts,
      content: aiResponse
    });

    
    user.credits -= 10;
    user.notes = user.notes || [];
    user.notes.push(notes._id);
    await user.save();

  
    return res.status(200).json({
      success: true,
      data: aiResponse,
      notesId: notes._id,
      creditsLeft: user.credits
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
