const ctrlWrapper = (ctrl) => {
  const interCtrl = async (req, res, next) => {
    try {
      ctrl(req, res);
    } catch (error) {
      next(error);
    }
  };

  return interCtrl;
};

module.exports = ctrlWrapper;
