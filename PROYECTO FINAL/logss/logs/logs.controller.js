const { getLogsBd } = require('./logs.actions');

// Controlador para consultar logs
async function queryLogs(req, res) {
    const { action, nroDocumento, tipoDocumento, startDate, endDate } = req.query;
  
    let filter = {};
  
    if (action) {
      filter.action = action;
    }
  
    if (nroDocumento) {
      filter.nroDocumento = nroDocumento;
    }
  
    if (tipoDocumento) {
      filter.tipoDocumento = tipoDocumento;
    }
  
    if (startDate && endDate) {
      console.log('startDate', startDate);
      filter.timestamp = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    } else if (startDate) {
      console.log('startDate', startDate);
      filter.timestamp = { $gte: new Date(startDate) };
    } else if (endDate) {
      filter.timestamp = { $lte: new Date(endDate) };
    }
  
    try {
      const logs = await getLogsBd(filter);
      console.log(logs);
      res.status(200).json(logs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = { queryLogs };