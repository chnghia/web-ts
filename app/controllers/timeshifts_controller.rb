class TimeshiftsController < ApplicationController
  # GET /timeshifts
  # GET /timeshifts.json
  def index
    redirect_to "/settings/timeshifts"
  end

  # GET /timeshifts/1
  # GET /timeshifts/1.json
  def show
    @timeshift = Timeshift.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @timeshift }
    end
  end

  # GET /timeshifts/new
  # GET /timeshifts/new.json
  def new
    @timeshift = Timeshift.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @timeshift }
    end
  end

  # GET /timeshifts/1/edit
  def edit
    @timeshift = Timeshift.find(params[:id])
  end

  # POST /timeshifts
  # POST /timeshifts.json
  def create
    @timeshift = Timeshift.new(params[:timeshift])

    respond_to do |format|
      if @timeshift.save
        format.html { redirect_to @timeshift, notice: 'Timeshift was successfully created.' }
        format.json { render json: @timeshift, status: :created, location: @timeshift }
      else
        format.html { render action: "new" }
        format.json { render json: @timeshift.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /timeshifts/1
  # PUT /timeshifts/1.json
  def update
    @timeshift = Timeshift.find(params[:id])

    respond_to do |format|
      if @timeshift.update_attributes(params[:timeshift])
        format.html { redirect_to @timeshift, notice: 'Timeshift was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @timeshift.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /timeshifts/1
  # DELETE /timeshifts/1.json
  def destroy
    @timeshift = Timeshift.find(params[:id])
    @timeshift.destroy

    respond_to do |format|
      format.html { redirect_to timeshifts_url }
      format.json { head :no_content }
    end
  end
end
