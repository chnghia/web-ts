class DayoffsController < ApplicationController
  # GET /dayoffs
  # GET /dayoffs.json
  def index
    redirect_to "/settings/dayoffs"
  end

  # GET /dayoffs/1
  # GET /dayoffs/1.json
  def show
    @dayoff = Dayoff.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @dayoff }
    end
  end

  # GET /dayoffs/new
  # GET /dayoffs/new.json
  def new
    @dayoff = Dayoff.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @dayoff }
    end
  end

  # GET /dayoffs/1/edit
  def edit
    @dayoff = Dayoff.find(params[:id])
  end

  # POST /dayoffs
  # POST /dayoffs.json
  def create
    @dayoff = Dayoff.new(params[:dayoff])

    respond_to do |format|
      if @dayoff.save
        format.html { redirect_to @dayoff, notice: 'Dayoff was successfully created.' }
        format.json { render json: @dayoff, status: :created, location: @dayoff }
      else
        format.html { render action: "new" }
        format.json { render json: @dayoff.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /dayoffs/1
  # PUT /dayoffs/1.json
  def update
    @dayoff = Dayoff.find(params[:id])

    respond_to do |format|
      if @dayoff.update_attributes(params[:dayoff])
        format.html { redirect_to @dayoff, notice: 'Dayoff was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @dayoff.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /dayoffs/1
  # DELETE /dayoffs/1.json
  def destroy
    @dayoff = Dayoff.find(params[:id])
    @dayoff.destroy

    respond_to do |format|
      format.html { redirect_to dayoffs_url }
      format.json { head :no_content }
    end
  end
end
