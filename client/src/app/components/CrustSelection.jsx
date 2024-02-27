const CrustSelection = ({ crust, setCrust }) => {
  return (
    <div> 
      {/* crust */}
      <div className="flex justify-center gap-x-12 mb-8">
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
          className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer"
          
          type='radio'
          name="crust"
          value="traditiona"
          checked={crust === 'traditiona'}
          onChange={(e)=> setCrust(e.target.value)}
          />
          Traditional
        </label>

  
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
          className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer"
          
          type='radio'
          name="crust"
          value="thin"
          checked={crust === 'thin'}
          onChange={(e)=> setCrust(e.target.value)}
          />
          Thin
        </label>


      </div>
    </div>
  );
};

export default CrustSelection;
